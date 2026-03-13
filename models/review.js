// const mongoose = require("mongoose");
// const review = require("./review");
// const { ref } = require("joi");
// const Schema = mongoose.Schema;
// const listingSchema = new Schema({
//   title: {
//     type: String,
//     // required: true,
//   },
//   description: String,
//   image: {
//     url: {
//       type: String,
//       // required: true,
//     },
//   },
//   price: {
//     type: Number,
//     // required: true,
//   },
//   location: {
//     type: String,
//     // required: true,
//   },
//   country: {
//     type: String,
//     // required: true,
//   },
//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// });

// const listening = mongoose.model("listening", listingSchema);
// module.exports = listening;





// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   comment: {
//     type: String,
//   },
//   rating: {
//     type: Number,
//   },
// });

// const Review = mongoose.model("Review", reviewSchema);

// module.exports = Review;










const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;