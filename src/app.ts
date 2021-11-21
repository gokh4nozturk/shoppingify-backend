require("dotenv").config();
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

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  `mongodb://mongo:12345@cluster0-shard-00-00.ypwpa.mongodb.net:27017,cluster0-shard-00-01.ypwpa.mongodb.net:27017,cluster0-shard-00-02.ypwpa.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-8kezbb-shard-0&authSource=admin&retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    app.listen(PORT, () => {
      console.log(`listening ${PORT}`);
    });
  }
);
