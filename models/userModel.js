import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  displayName: { type: String, required: false },
  furiganaDisplayName: { type: String, required: false },
  age: { type: Number, required: false },
  height: { type: Number, required: false },
  hobbies: { type: Array, required: true },
  description: { type: String, required: true },
  links: { type: Array, required: true },
  products: { type: Array, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("user", userSchema);

export default User;
