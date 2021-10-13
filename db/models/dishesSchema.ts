import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: { type: String, trim: true, required: true, default: "" },
  price: { type: Number, trim: true, required: true, default: 0 },
  ingredients: [{ type: String, trim: true, required: true, default: [] }],
  tags: [{ type: String, trim: true, required: true, default: [] }],
  resturants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resturant",
      required: true,
      default: [],
    },
  ],
});

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;

/*

{"name": "chicken" , "price" : "100", "ingredients": "["butter", "chicken"]" , "tags":[], "resturants": []}

*/
