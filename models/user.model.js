const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  storeName: {
    type: String,
    required: [true, 'Store name required!'],
  },
  email: {
    type: String,
    maxlength: 256,
    required: [true, 'Email is required!'],
    unique: [true, 'Email already exists!'],
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!',
    },
  },
  role: {
    type: String,
    enum: ['normal', 'admin'],
    required: [true, 'Please specify user role!'],
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
