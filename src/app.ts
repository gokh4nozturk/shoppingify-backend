import bodyParser from "body-parser";
import express from "express";

import {
  addProduct,
  allProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "./controllers/product.controller";

const app = express();
require("dotenv").config();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/products", allProduct);
app.get("/api/product/:id", getProduct);
app.post("/api/product", addProduct);
app.put("/api/product/:id", updateProduct);
app.delete("/api/product/:id", deleteProduct);

app.listen(process.env.PORT, () => {
  console.log(`listening ${process.env.PORT}`);
});
