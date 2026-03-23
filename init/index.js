// // require("dotenv").config();
// require("dotenv").config({ path: "../.env" });
// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");
// // console.log("DB URL:", process.env.MONGO_URL);
// // Database URL (Atlas or Local)
// const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/airbnb";

// async function main() {
//   await mongoose.connect(dbUrl);
//   console.log("Connected to DB");
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data.map((obj) => ({ ...obj, author: "69be432487b6a9538b6970f6" }));
//   await Listing.insertMany(initData.data);
//   console.log("Data was initialized");
// };

// main()
//   .then(() => initDB())
//   .catch((err) => console.log(err));






require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/airbnb";

async function main() {
  await mongoose.connect(dbUrl);
  console.log("Connected to DB");
}

const initDB = async () => {
  await Listing.deleteMany({});

  const newData = initData.data.map((obj) => ({
    ...obj,
    author: "69be432487b6a9538b6970f6",
  }));

  await Listing.insertMany(newData);
  console.log("Data was initialized");
};

main()
  .then(() => initDB())
  .catch((err) => console.log(err));