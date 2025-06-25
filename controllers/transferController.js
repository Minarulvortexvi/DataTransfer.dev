// controllers/transferController.js
const multer = require('multer');
const path = require('path');

// স্টোরেজ কনফিগ
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// ফাইল ফিল্টার
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|mp4|pdf|docx/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Only certain filetypes are allowed!');
  }
};

const upload = multer({ storage, fileFilter });

exports.uploadFile = upload.single('file');
