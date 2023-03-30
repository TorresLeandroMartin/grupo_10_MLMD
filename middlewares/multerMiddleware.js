<<<<<<< HEAD
<<<<<<< HEAD
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img/users-avatar"));
  },
  filename: (req, file, cb) => {
    const newFilename = "avatar-" + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

module.exports = upload;
=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2

const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img/avatars");
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})


const uploadFile = multer({ storage });

<<<<<<< HEAD
module.exports = uploadFile;
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
module.exports = uploadFile;
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
