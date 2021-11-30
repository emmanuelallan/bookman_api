const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil, lowerCase, functionsIn } = require('lodash');
const { v4: uuidv4 } = require('uuid');
const APIError = require('../../errors/api-error');
const { env } = require('../../../config/vars');

// Books Schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    subTitle: {
      type: String,
      maxlength: 128,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      required: true,
    },
    url: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      maxlength: 128,
      required: true,
    },
    imgUrl: {
      type: String,
      trim: true,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    pubDate: {
      type: String,
      trim: true,
      maxlength: 128,
    },
    pages: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      trim: true,
      maxlength: 128,
    },
    ISBN: {
      type: String,
      trim: true,
      maxlength: 128,
    },
    pdf: {
      fileSize: {
        type: String,
      },
      src: {
        type: String,
        maxlength: 128,
      },
      pdfPrice: {
        type: Number,
      },
      available: {
        type: Boolean,
      },
    },
    rating: {
      average: {
        type: String,
      },
      global: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

// methods
bookSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      'id',
      'title',
      'subTitle',
      'description',
      'price',
      'url',
      'author',
      'imgUrl',
      'quantity',
      'pubDate',
      'pages',
      'language',
      'ISBN',
      'pdf',
      'rating',
      'createdAt',
    ];
    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

// Statics
bookSchema.statics = {
  // check title duplicates
  checkDuplicateTitle(error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return new APIError({
        message: 'Duplicate Error',
        errors: [
          {
            field: 'title',
            location: 'body',
            messages: ['"title" already exists'],
          },
        ],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  },

  // list books in decending order of 'createdAt' timestamp
  list({
    page = 1,
    perPage = 30,
    title,
    subTitle,
    description,
    price,
    url,
    author,
    imgUrl,
    quantity,
    pubDate,
    pages,
    language,
    ISBN,
    pdf,
    rating,
  }) {
    const options = omitBy(
      {
        title,
        subTitle,
        description,
        price,
        url,
        author,
        imgUrl,
        quantity,
        pubDate,
        pages,
        language,
        ISBN,
        pdf,
        rating,
      },
      isNil
    );

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },
};

module.exports = mongoose.model('Book', bookSchema);
