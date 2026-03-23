const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;

  await newReview.save();

  listing.reviews.push(newReview);
  await listing.save();

  req.flash("success", "New Review Created!");
  res.redirect(`/listings/${id}`);
};

module.exports.updateReviews = async (req, res) => {
  let { id, reviewId } = req.params;

  await Review.findByIdAndUpdate(reviewId, { ...req.body.review });

  req.flash("success", "Review updated successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.editReviews = async (req, res) => {
  let { id, reviewId } = req.params;

  const listing = await Listing.findById(id);
  const review = await Review.findById(reviewId);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  if (!review) {
    req.flash("error", "Review not found!");
    return res.redirect(`/listings/${id}`);
  }

  res.render("reviews/edit.ejs", { listing, review });
};
module.exports.deleteReviews = async (req, res) => {
  let { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId },
  });

  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted!");
  res.redirect(`/listings/${id}`);
};
