import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  name: { String, required: true },
  age: { Number, required: true },
  ingredients: { String, required: true, default: [] }, // to declare as object
  tags: [],
  reviews: [{ type: Schema.Types.ObjectId, ref: "review", required: true }],
});

const DishModel = mongoose.model("Dish", dishSchema);

export default DishModel;
