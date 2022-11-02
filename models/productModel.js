import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: false },
  synopsis: { type: String, required: true },
  authors: { type: Array, required: true },
  companies: { type: Array, required: false },
  category: { type: String, required: true },
  status: { type: String, required: true },
  genres: { type: Array, required: false },
  rating: { type: Number, required: false },
  image: { type: String, required: false },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
