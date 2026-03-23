const User = require("../models/user");
module.exports.renderSignupfrom = (req, res) => {
  res.render("users/signup");
};

module.exports.signupAutologin = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      email: email,
      username: username,
    });

    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }

      req.flash(
        "success",
        "Welcome to Zenvyra! Account created successfully ✔️",
      );

      res.redirect(req.session.redirectUrl || "/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginfrom = (req, res) => {
  res.render("users/login");
};

module.exports.logIn = (req, res) => {
  req.flash("success", "Welcome back to Zenvyra ✔️");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logOUT = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    req.flash("success", "Logged out successfully!");
    res.redirect("/listings");
  });
};
