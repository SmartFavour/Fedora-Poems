import mongoose from "mongoose";

const PoemSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Poem || mongoose.model('Poem', PoemSchema);
