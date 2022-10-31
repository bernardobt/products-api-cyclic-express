import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Category = mongoose.model("category", categorySchema);

export default Category;
