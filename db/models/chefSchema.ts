import { Schema, model } from "mongoose";

interface Chef {
  name: string;
  image: string;
  description: string;
  resturants: string[];
}

// const Schema = Schema;
const chefSchema = new Schema<Chef>({
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

const Chef = model<Chef>("Chef", chefSchema);

export default Chef;

/*

 {"name": "Yossi shitrit", "image":"abc" , "description" : "marocco","resturants": []}
 
 */
