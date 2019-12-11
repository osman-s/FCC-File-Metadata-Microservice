const Joi = require('joi');
const mongoose = require('mongoose');

const Metadata = mongoose.model('Metadata', new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  }
}));

function validateMetadata(metadata) {
  const schema = {
    name: Joi.string().required(),
    type: Joi.string().required(),
    size: Joi.number().required(),
  };

  return Joi.validate(metadata, schema);
}

exports.Metadata = Metadata; 
exports.validate = validateMetadata;