import { Schema, model, models } from "mongoose";

const ComponentSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  code: {
      type: String
  }
});

const ComponentCode =
  models.ComponentCode || model("ComponentCode", ComponentSchema);

export default ComponentCode;
