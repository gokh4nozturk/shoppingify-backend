import mongoose from "mongoose";

export const historySchema = new mongoose.Schema({
  name: { type: String, required: true },
  listItem: { type: Array, required: true },
  createdAt: { type: Date, required: false, default: Date.now },
  visible: { type: Boolean, required: false, default: true },
  completed: { type: Boolean, required: false, default: false },
  pieces: { type: Number, required: true, default: 0 },
});

const History = mongoose.model("History", historySchema);

export default History;
