import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  note: { type: String, required: false },
  image: { type: String, required: false },
  createdAt: { type: Date, required: false, default: Date.now },
  visible: { type: Boolean, required: false, default: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
