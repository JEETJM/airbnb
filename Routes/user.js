const express = require("express");
const router = express.Router();
const User = require("../models/user");
const WrapAsync = require("../utils/WrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const usersController = require("../controllers/users.js");

// Router.route
// Signup form page
// Signup form submit + auto login
router
  .route("/signup")
  .get(usersController.renderSignupfrom)
  .post(WrapAsync(usersController.signupAutologin));

// Get login page
// Login submit
router.route("/login").get (usersController.renderLoginfrom).post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  usersController.logIn,
);

// Logout
router.get("/logout", usersController.logOUT);

module.exports = router;
