import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  tilte: { type: String, required: true },
  subtilte: { type: String, required: false },
  author: { type: String, required: true },
  synopsis: { type: String, required: true },
  rating: { type: Number, required: false },
  comment: { type: String, required: false },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Book = mongoose.model("book", bookSchema);

export default Book;
