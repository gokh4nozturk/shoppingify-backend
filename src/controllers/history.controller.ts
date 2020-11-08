import { Request, Response } from "express";
import History from "./../history";

export const allHistory = (req: Request, res: Response) => {
  History.find((err: any, histories: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(histories);
    }
  });
};

export const getHistory = (req: Request, res: Response) => {
  History.findById(req.params.id, (err: any, history: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(history);
    }
  });
};

export const addHistory = (req: Request, res: Response) => {
  const history = new History(req.body);
  history.save().then(() => {
    res.send("added the history");
  });
};

export const updateHistory = (req: Request, res: Response) => {
  History.findByIdAndUpdate(req.params.id, req.body, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("successfully updated the history");
    }
  });
};

export const deleteHistory = (req: Request, res: Response) => {
  History.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("successfully deleted the history");
    }
  });
};
