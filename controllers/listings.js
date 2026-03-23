const Listing = require("../models/listing");
const uploadToCloudinary = require("../utils/cloudUpload");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate("author")
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    });

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.searchListings = async (req, res) => {
  let { query } = req.query;

  const listings = await Listing.find({
    $or: [
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
      { title: { $regex: query, $options: "i" } },
    ],
  });

  res.render("listings/index.ejs", {
    allListings: listings,
    query,
  });
};

// module.exports.createListings = async (req, res, next) => {
//   try {
//     const newListing = new Listing(req.body.listing);

//     if (req.file) {
//       const result = await uploadToCloudinary(req.file.buffer);

//       newListing.image = {
//         url: result.secure_url,
//         filename: result.public_id,
//       };
//     }

//     newListing.author = req.user._id;
//     await newListing.save();

//     req.flash("success", "New Listing Created Successfully!");
//     res.redirect(`/listings/${newListing._id}`);
//   } catch (err) {
//     next(err);
//   }
// };



module.exports.createListings = async (req, res, next) => {
  try {
    const newListing = new Listing(req.body.listing);

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);

      newListing.image = {
        url: result.secure_url,
        filename: result.public_id,
      };
    }

    newListing.author = req.user._id;
    await newListing.save();

    req.flash("success", "New Listing Created Successfully!");
    res.redirect(`/listings/${newListing._id}`);
  } catch (err) {
    next(err);
  }
};



module.exports.editListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing });
};





module.exports.updateListings = async (req, res, next) => {
  try {
    let { id } = req.params;

    const listing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing },
      { new: true }
    );

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);

      listing.image = {
        url: result.secure_url,
        filename: result.public_id,
      };

      await listing.save();
    }

    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    next(err);
  }
};



// module.exports.updateListings = async (req, res, next) => {
//   try {
//     let { id } = req.params;

//     const listing = await Listing.findByIdAndUpdate(
//       id,
//       { ...req.body.listing },
//       { new: true }
//     );

//     if (req.file) {
//       const result = await uploadToCloudinary(req.file.buffer);

//       listing.image = {
//         url: result.secure_url,
//         filename: result.public_id,
//       };
//       await listing.save();
//     }

//     req.flash("success", "Listing Updated Successfully!");
//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     next(err);
//   }
// };

module.exports.deleteListings = async (req, res) => {
  let { id } = req.params;

  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};