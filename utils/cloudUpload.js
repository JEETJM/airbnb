const cloudinary = require("../cloudConfig");
const streamifier = require("streamifier");

const uploadToCloudinary = (fileBuffer, folderName = "Zenvyra/listings") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: folderName },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

module.exports = uploadToCloudinary;