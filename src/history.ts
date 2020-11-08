import mongoose from "mongoose";

export const historySchema = new mongoose.Schema({
  name: { type: String, required: true },
  listItem: { type: Object, required: true },
  createdAt: { type: Date, required: false, default: Date.now },
  visible: { type: Boolean, required: false, default: true },
});

const History = mongoose.model("History", historySchema);

export default History;
