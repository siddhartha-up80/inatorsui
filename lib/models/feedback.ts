// lib/models/feedback.ts
import { Schema, model, models, Document } from "mongoose";

interface IFeedback extends Document {
  name: string;
  email: string;
  category: string;
  message: string;
}

const FeedbackSchema = new Schema<IFeedback>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  category: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Feedback =
  models.Feedback || model<IFeedback>("Feedback", FeedbackSchema);

export default Feedback;
