// const express = require("express");
// const app = express();
// // const port = 8080;
// const port = process.env.PORT || 8080;
// const mongoose = require("mongoose");
// const Joi = require("joi");

// const WrapAsync = require("./utils/WrapAsync.js");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");

// // const mongoose = require("mongoose");

// // const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/airbnb";

// // async function main(){
// //   await mongoose.connect(dbUrl);
// // }

// // main()
// // .then(()=>{
// //   console.log("DB Connected");
// // })
// // .catch((err)=>{
// //   console.log("DB Error:",err);
// // });
// //ExpressError require *************
// // const ExpressError = require("../utils/ExpressError.js");
// /////////REQUIRE THE LISTINGS ROUTES WITH ROUTER ......................
// const listings = require("./Routes/listings.js");

// /////////REQUIRE THE LISTINGS ROUTES WITH ROUTER ......................
// const reviews = require("./Routes/review.js");

// // ExpressError require *************
// const ExpressError = require("./utils/ExpressError.js");
// const path = require("path");
// const router = require("./Routes/listings.js");
// // const methodOverride = require("method-override");
// app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(methodOverride("_method"));
// app.use(express.urlencoded({ extended: true }));

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.engine("ejs", ejsMate);
// app.use(express.static(path.join(__dirname, "public")));
// app.use(methodOverride("_method"));

// // app.use((err, req, res, next) => {
// //   let { statusCode = 500, message = "Something Went Wrong" } = err;
// //   res.status(statusCode).render("error.ejs", { err });
// // });
// //create a  basic home root .
// // app.get("/", async (req, res) => {
// //   const allListings = await Listing.find({});
// //   // res.send(allListings);
// //   res.render("./listings/index.ejs", { allListings });
// // });

// //create a testing Listining .
// // app.get("/testListing", async (req, res) => {
// //   // console.log("Perfect !! Root is Working . ");
// //   // res.send("ok done Response is Working !");
// //   let samplelisting = new Listing({
// //     title: "Most luxurious experience at this price",
// //     description:
// //       "This is not an ordinary AirBnB; not spare space, but a labor of love, built with passion, energy and splashes of creativity, constructed to give you a new lease of life. This is an extremely spacious studio apartment chock full of state-of-the-art amenities and a bathroom with  all modern fittings. What we pride ourselves on, however, is the aesthetics that this place is imbued with, the luxury and relaxation it offers and the terrace that makes hearts flutter; a sanctuary tailor-made for you . ",
// //     Price: 1940 ,
// //     location: "Kolkata",
// //     country: "INDIA",

// //   });
// //   await samplelisting.save();
// //   console.log("Sample Was Saved !");
// //   res.send("Sucessfull Testing !!");
// // });

// // // function for  check REVIEW  comment---------------------------------------------------
// // const validateReview = (req, res, next) => {
// //   let { error } = reviewSchema.validate(req.body);
// //   // console.log(resultt);
// //   if (error) {
// //     let errMsg = error.details.map((el) => el.message).join(",");
// //     throw new ExpressError(400, errMsg);
// //   } else next();
// // };

// app.get("/", (req, res) => {
//   res.redirect("/listings");
// });

// /////////USE THE LISTINGS ROUTES WITH ROUTER ...............------------------------------------------+++++++++++++++++++.......
// app.use("/listings", listings);

// /////////USE THE REVIEWS  ROUTES WITH ROUTER ...............------------------------------------------+++++++++++++++++++.......
// app.use("/listings/:id/reviews", reviews);

// // CREATE REVIEW ROUTE

// // app.get("/listings/:id", async (req, res) => {

// //   const listing = await Listing.findById(req.params.id)
// //   .populate("reviews");   // ⭐ VERY IMPORTANT

// //   res.render("listings/show", { listing });

// // });

// // // SEARCH ROUTE
// // app.get("/search", async (req, res) => {
// //   let { query } = req.query;

// //   const listings = await Listing.find({
// //     $or: [
// //       { location: { $regex: query, $options: "i" } },
// //       { country: { $regex: query, $options: "i" } },
// //       { title: { $regex: query, $options: "i" } },
// //     ],
// //   });

// //   res.render("./listings/index.ejs", {
// //     allListings: listings,
// //     query: query,
// //   });
// // });

// // ----================
// // 404 handler (must be AFTER all routes)
// app.use((req, res, next) => {
//   next(new ExpressError(404, "Page Not Found"));
// });
// //  if any route doesnot found match then this is all for
// // app.all("*", (req, res, next) => {
// //   next(new ExpressError(404, "Page not found !!"));
// //   // next();
// // });
// //Error handling middleware ~~~~~~~~~~~~~~~~~~~~~

// // app.use((err, req, res, next) => {
// //   let { statusCode = 500, message = "Something Went Wrong !!" } = err;
// //   // res.send("Something Went Wrong !! !! !!!   !!!!");
// //   // res.status("error.ejs", { message });
// //   res.status(statusCode).render("error.ejs", { message });
// // });

// app.use((err, req, res, next) => {
//   let { statusCode = 500, message = "Something Went Wrong" } = err;
//   res.status(statusCode).render("error.ejs", { err });
// });

// //server port .
// // app.listen(port, () => {
// //   console.log("Server is listening now on :", port);
// // });

// // Connect DB, then start server
// mongoose
//   .connect(dbUrl)
//   .then(() => {
//     console.log("DB Connected");
//     app.listen(port, () => {
//       console.log("Server is listening now on :", port);
//     });
//   })
//   .catch((err) => {
//     console.log("DB Error:", err);
//   });

// //connect dataabse .
// // let mongo_url = "mongodb://127.0.0.1:27017/AIRBNB";
// // async function main() {
// //   await mongoose.connect(mongo_url);
// // }
// // // call the main function .
// // main()
// //   .then(() => {
// //     console.log("Connected to DB");
// //   })
// //   .catch((err) => {
// //     console.log("NOT to reach th DB Error is : ", err);
// //   });

// const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/airbnb";

// mongoose.connect(dbUrl)
// .then(()=>{
//   console.log("DB Connected");
// })
// .catch((err)=>{
//   console.log(err);
// });

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const Joi = require("joi");
require("dotenv").config();
const session = require("express-session");
//require flash for use one time of
const flash = require("connect-flash");
const WrapAsync = require("./utils/WrapAsync.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const listings = require("./Routes/listings.js");
const reviews = require("./Routes/review.js");
const ExpressError = require("./utils/ExpressError.js");
const path = require("path");

const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/AIRBNB";
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
    maxAge: 7 * 24 * 60 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

//SEssion Middleware
app.use(session(sessionOptions));
app.get("/", (req, res) => {
  res.redirect("/listings");
});
//FLASH MIDDLEWARE .
app.use(flash());

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

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
