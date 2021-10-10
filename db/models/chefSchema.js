import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
  name: { String, required: true },
  Image: { String, required: true },
  description: { String, required: true },
  resturants: [
    { type: Schema.Types.ObjectId, ref: "Resturant", required: true }, //check if capital
  ],
});

const ChefModel = mongoose.model("Chef", chefSchema);

export default ChefModel;
