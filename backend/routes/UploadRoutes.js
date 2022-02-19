import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const pdfStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/pdf/");
  },
  filename(req, file, cb) {
    cb(null, `p${Math.floor(Math.random() * 1000)}-${file.originalname}`);
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

function checkPDF(file, cb) {
  const filetypes = /pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("PDF only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

const uploadPDF = multer({
  storage: pdfStorage,
  fileFilter: function (req, file, cb) {
    checkPDF(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

router.post("/pdf", uploadPDF.single("pdf"), (req, res) => {
  res.send(`/${req.file.path}`);
  // let str = req.file.path;
  // let arr = str.split("\\");
  // res.send("/" + arr[2] + "\\" + arr[3]);
});

router.post("/multi", upload.array("pictures"), (req, res) => {
  let filePaths = [];
  req.files.map((file) => {
    filePaths.push(`/${file.path}`);
  });
  res.send(filePaths);
});

export default router;
