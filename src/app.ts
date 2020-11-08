require("dotenv").config();
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import {
  addHistory,
  allHistory,
  deleteHistory,
  getHistory,
  updateHistory,
} from "./controllers/history.controller";

import {
  addProduct,
  allProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "./controllers/product.controller";

const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/products", allProduct);
app.get("/api/product/:id", getProduct);
app.post("/api/product", addProduct);
app.put("/api/product/:id", updateProduct);
app.delete("/api/product/:id", deleteProduct);

app.get("/api/histories", allHistory);
app.get("/api/history/:id", getHistory);
app.post("/api/history", addHistory);
app.put("/api/history/:id", updateHistory);
app.delete("/api/history/:id", deleteHistory);

mongoose.connect(
  `mongodb://localhost:27017/shoppingifyDB`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    app.listen(process.env.PORT, () => {
      console.log(`listening ${process.env.PORT}`);
    });
  }
);
