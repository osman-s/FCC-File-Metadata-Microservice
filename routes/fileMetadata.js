var multer = require("multer");
var bodyParser = require("body-parser");
const _ = require("lodash");
const { Metadata, validate } = require("../models/metadata.model");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//  multer store and validation
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

// router.get("/users", async (req, res) => {
//   const user = await User.find({}).sort({name: 1}).select('name _id');
//   res.send(user);
// });

router.post("/", upload.single("upfile"), async (req, res) => {
  file = req.file;
  metadata = new Metadata({
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  });
  metadata = _.pick(metadata, ["name", "type", "size"]);
  const { error } = validate(metadata);
  if (error) return res.status(400).send(error.details[0].message);
  res.send(metadata);
});

module.exports = router;
