const express = require("express");
const router = express.Router({ mergeParams: true });

const WrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../Schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewsController = require("../controllers/reviews.js");

// Validate review
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Create review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  WrapAsync(reviewsController.createReview),
);

// Edit review form
router.get(
  "/:reviewId/edit",
  isLoggedIn,
  isReviewAuthor,
  WrapAsync(reviewsController.editReviews),
);

// Update review
router.put(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  validateReview,
  WrapAsync(reviewsController.updateReviews),
);

// Delete review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  WrapAsync(reviewsController.deleteReviews),
);

module.exports = router;
