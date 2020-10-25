import mongoose from "mongoose";

mongoose.connect(
  `mongodb://localhost:27017/shoppingifyDB`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("succesfully DB connect");
  }
);

export const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  note: { type: String, required: true },
  image: {},
});

const Product = mongoose.model("Product", productSchema);
export default Product;
