const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required!'],
    maxlength: 256,
  },
  subTitle: {
    type: String,
    maxlength: 256,
  },
  imgUrl: {
    type: String,
    required: [true, 'Image url required!'],
  },
  author: {
    type: String,
    maxlength: 256,
    required: [true, 'Author required!'],
  },
  category: {
    type: String,
    maxlength: 256,
  },
  price: {
    type: Number,
    required: [true, 'Price is required!'],
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required!'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', bookSchema);
