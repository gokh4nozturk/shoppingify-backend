import { Request, Response } from "express";
import Product from "./../product";

export const allProduct = (req: Request, res: Response) => {
  try {
    Product.find((err: any, products: any) => {
      res.send(products);
    });
  } catch (err) {
    res.send(err);
  }
};

export const getProduct = (req: Request, res: Response) => {
  try {
    Product.findById(req.params.id, (err: any, product: any) => {
      res.send(product);
    });
  } catch (err) {
    res.send(err);
  }
};

export const addProduct = (req: Request, res: Response) => {
  const product = new Product(req.body);
  try {
    product.save().then(() => {
      res.send("added the product");
    });
  } catch (err) {
    res.send(err);
  }
};

export const updateProduct = (req: Request, res: Response) => {
  try {
    Product.findByIdAndUpdate(req.params.id, req.body, (err: any) => {
      res.send("successfully updated the product");
    });
  } catch (err) {
    res.send(err);
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  try {
    Product.deleteOne({ _id: req.params.id }, (err: any) => {
      res.send("successfully deleted the product");
    });
  } catch (err) {
    res.send(err);
  }
};
