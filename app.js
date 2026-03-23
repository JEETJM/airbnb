require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const Joi = require("joi");

const session = require("express-session");
//require flash for use one time of
const flash = require("connect-flash");
const WrapAsync = require("./utils/WrapAsync.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
//all passport
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const listingsRouter = require("./Routes/listings.js");
const reviewsRouter = require("./Routes/review.js");
const userRouter = require("./Routes/user.js");

const ExpressError = require("./utils/ExpressError.js");
const path = require("path");
app.use(express.static("public"));
// const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/airbnb";
// const dbUrl = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/airbnb";
const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/airbnb";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

//use session
const sessionOptions = {
  secret: "mySupersecretCode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

//SEssion Middleware
app.use(session(sessionOptions));
//FLASH MIDDLEWARE .
app.use(flash());
//passport middleware .
app.use(passport.initialize());
app.use(passport.session());
// app.use("/", user);
passport.use(new LocalStrategy(User.authenticate()));
// for store the session Decs
passport.serializeUser(User.serializeUser());
//for unstore the session the session sdocs ..
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.redirect("/listings");
});








// app.use((err, req, res, next) => {
//   console.error("===== ERROR START =====");
//   console.error(err);
//   console.error("message:", err?.message);
//   console.error("stack:", err?.stack);
//   console.error("===== ERROR END =====");

//   res.status(err.statusCode || 500).render("error.ejs", {
//     err: {
//       statusCode: err.statusCode || 500,
//       message: err.message || "Something went wrong!",
//       stack: err.stack || "No stack available",
//     },
//   });
// });



app.use((err, req, res, next) => {
  console.log("===== GLOBAL ERROR =====");
  console.log(err);
  console.log("message =>", err && err.message);
  console.log("stack =>", err && err.stack);

  res.status(err.statusCode || 500).send(
    `ERROR: ${err.message || "Something went wrong"}`
  );
});










//Flash MIDDLEWARE ...........

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;

  next();
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500 } = err;
  res.status(statusCode).render("error.ejs", { err });
});

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("DB Connected");
    app.listen(port, () => {
      console.log("Server is listening now on :", port);
    });
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });
