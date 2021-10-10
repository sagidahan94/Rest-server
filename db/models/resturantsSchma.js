import mongoose from "mongoose";

const resturantSchema = new mongoose.Schema({
  name: { String, required: true },
  image: { String, required: true },
  chef: [{ type: Schema.Types.ObjectId, ref: "chef", required: true }],
  dishes: [{ type: Schema.Types.ObjectId, ref: "dish", required: true }],
});

const ResturantModel = mongoose.model("Resturant", resturantSchema);

export default ResturantModel;
