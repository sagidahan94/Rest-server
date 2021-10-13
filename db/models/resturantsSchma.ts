import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resturantSchema = new Schema({
  name: { type: String, trim: true, required: true, default: "" },
  image: { type: String, trim: true, required: true, default: "" },
  chef: [
    { type: Schema.Types.ObjectId, ref: "Chef", required: true, default: [] },
  ],
  dishes: [
    { type: Schema.Types.ObjectId, ref: "Dish", required: true, default: [] },
  ],
});

const Resturant = mongoose.model("Resturant", resturantSchema);

export default Resturant;

/*

{"name": "modesta", "image":"bbb" , "chef": "616403fd1cb913bcfa012c45","dishes": "616404581cb913bcfa012c47"}

*/
