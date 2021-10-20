import { Schema, model } from "mongoose";

// const Schema = Schema;
const chefSchema = new Schema({
  name: { type: String, trim: true, required: true, default: "" },
  image: { type: String, trim: true, required: true, default: "" },
  description: { type: String, trim: true, required: true, default: "" },
  resturants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resturant",
      required: true,
      default: [],
    },
  ],
});

const Chef = model("Chef", chefSchema);

export default Chef;

/*

 {"name": "Yossi shitrit", "image":"abc" , "description" : "marocco","resturants": []}
 
 */
