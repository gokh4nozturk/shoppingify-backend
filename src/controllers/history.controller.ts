import { Request, Response } from "express";
import History from "./../history";

export const allHistory = (req: Request, res: Response) => {
  try {
    History.find((err: any, histories: any) => {
      res.send(histories);
    });
  } catch (err) {
    res.send(err);
  }
};

export const getHistory = (req: Request, res: Response) => {
  try {
    History.findById(req.params.id, (err: any, history: any) => {
      res.send(history);
    });
  } catch (err) {
    res.send(err);
  }
};

export const addHistory = (req: Request, res: Response) => {
  try {
    const history = new History(req.body);
    history.save().then(() => {
      res.send("added the history");
    });
  } catch (err) {
    res.send(err);
  }
};

export const updateHistory = (req: Request, res: Response) => {
  try {
    History.findByIdAndUpdate(req.params.id, req.body, (err: any) => {
      res.send("successfully updated the history");
    });
  } catch (err) {
    res.send(err);
  }
};

export const deleteHistory = (req: Request, res: Response) => {
  try {
    History.deleteOne({ _id: req.params.id }, (err: any) => {
      res.send("successfully deleted the history");
    });
  } catch (err) {
    res.send(err.message);
  }
};
