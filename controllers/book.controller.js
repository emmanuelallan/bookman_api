const Book = require('../models/book.model');

// create a book
exports.create = (req, res) => {
  const { title, subTitle, imgUrl, author, category, price, stock } = req.body;

  // get book details
  const book = new Book({
    title,
    subTitle,
    imgUrl,
    author,
    category,
    price,
    stock,
  });

  // save book
  book.save((err, book) => {
    if (err) {
      res.status(500).send({
        message: err,
      });

      return;
    }

    res.status(200).send({
      message: 'Book successfully created!',
    });
  });
};

// get book by bookId
exports.get = (req, res) => {
  const { bookId } = req.params;

  Book.findById({ _id: bookId }).exec((err, book) => {
    if (err) {
      res.status(500).send({
        message: err,
      });

      return;
    }

    // book not found
    if (!book) {
      return res.status(404).send({
        message: 'Book Not Found!',
      });
    }

    // res with details
    res.status(200).send({
      book: {
        id: book.id,
        title: book.title,
        subTitle: book.subTitle,
        imgUrl: book.imgUrl,
        author: book.author,
        category: book.category,
        price: book.price,
        stock: book.stock,
        createdAt: book.created,
      },
    });
  });
};

// get all books
exports.list = (req, res) => {
  Book.find().exec((err, books) => {
    if (err) {
      res.status(500).send({
        message: err,
      });

      return;
    }

    res.status(200).send({
      books: books,
    });
  });
};

// edit book
exports.edit = (req, res) => {
  const { bookId } = req.params;
  Book.findByIdAndUpdate({ _id: bookId }, { ...req.body }).exec((err, book) => {
    if (err) {
      res.status(500).send({
        message: err,
      });

      return;
    }

    res.status(200).send({
      book: {
        id: book.id,
        title: book.title,
        subTitle: book.subTitle,
        imgUrl: book.imgUrl,
        author: book.author,
        category: book.category,
        price: book.price,
        stock: book.stock,
        createdAt: book.created,
      },
      message: 'Book edited successfully!',
    });
  });
};

// delete book
exports.remove = (req, res) => {
  const { bookId } = req.params;

  Book.deleteOne({ _id: bookId })
    .then((result) => {
      res.status(200).send({
        message: 'Book deleted successfully!',
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};
