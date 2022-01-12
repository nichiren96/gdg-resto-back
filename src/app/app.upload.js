const multer = require("multer");
const { resolve, extname } = require("path");

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, resolve(__dirname, "../../", "images/"));
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

module.exports = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const types = /jpeg|png|jpg|JPG|bmp|svg/;
    const extensionName = types.test(extname(file.originalname).toLowerCase());
    console.log(file.originalname);

    if (extensionName) {
      cb(null, true);
      return;
    }

    cb(null, false);
  },
});
