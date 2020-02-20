const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    author: { type: Schema.ObjectId, ref: 'Author', required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.ObjectId, ref: 'Genre' }]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual for this book instance URL.
BookSchema.virtual('url').get(function() {
  return '/books/book/' + this._id;
});


BookSchema.pre(/^find/, function(next) {
  this.populate({
  path:'author genre',
  select: '-__v -_id'
  });
  next();
});

// Export model.
module.exports = mongoose.model('Book', BookSchema);
