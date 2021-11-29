import { Schema, model } from "mongoose";

interface Dish {
  name: string;
  price: number;
  image: string;
  ingredients: string;
  tags: string[];
}

const dishSchema = new Schema<Dish>({
  name: { type: String, trim: true, required: true, default: "" },
  price: { type: Number, trim: true, required: true, default: 0 },
  image: { type: String, trim: true, required: true },
  ingredients: { type: String, trim: true, required: true },
  tags: [{ type: String, trim: true, required: true }],
});

const Dish = model<Dish>("Dish", dishSchema);

export default Dish;

/*

{"name": "chicken" , "price" : "100", "image" : "", "ingredients": "butter, chicken" , "tags":"["spicy"]"}

*/
