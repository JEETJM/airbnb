const express = require("express");
const router = express.Router();

const WrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isListingOwner } = require("../middleware.js");
const { listingSchema } = require("../Schema.js");
const listingsController = require("../controllers/listings.js");
const upload = require("../utils/multer"); // memory storage multer

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }
  next();
};

// INDEX + CREATE
router
  .route("/")
  .get(WrapAsync(listingsController.index))
  .post(
    isLoggedIn,
    upload.single("listingImage"),
    validateListing,
    WrapAsync(listingsController.createListings)
  );

// NEW
router.get("/new", isLoggedIn, listingsController.renderNewForm);

// SEARCH
router.get("/search", WrapAsync(listingsController.searchListings));

// EDIT
router.get(
  "/:id/edit",
  isLoggedIn,
  isListingOwner,
  WrapAsync(listingsController.editListings)
);

// SHOW + UPDATE + DELETE
router
  .route("/:id")
  .get(WrapAsync(listingsController.showListings))
  .put(
    isLoggedIn,
    isListingOwner,
    upload.single("listingImage"),
    validateListing,
    WrapAsync(listingsController.updateListings)
  )
  .delete(
    isLoggedIn,
    isListingOwner,
    WrapAsync(listingsController.deleteListings)
  );

module.exports = router;