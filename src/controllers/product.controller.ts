import { Request, Response } from "express";
import Product from "./../product";

export const allProduct = (req: Request, res: Response) => {
  Product.find((err: any, products: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(products);
    }
  });
};

export const getProduct = (req: Request, res: Response) => {
  Product.findById(req.params.id, (err: any, product: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(product);
    }
  });
};

export const addProduct = (req: Request, res: Response) => {
  const product = new Product(req.body);
  product.save().then(() => {
    res.send("added the product");
  });
};

export const updateProduct = (req: Request, res: Response) => {
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, product: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("successfully updated the product");
      }
    }
  );
};

export const deleteProduct = (req: Request, res: Response) => {
  Product.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("successfully deleted the product");
    }
  });
};
