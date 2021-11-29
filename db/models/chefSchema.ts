import { Schema, model } from "mongoose";

interface Chef {
  name: string;
  image: string;
  description: string;
  restaurants: string[];
}

// const Schema = Schema;
const chefSchema = new Schema<Chef>({
  name: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  restaurants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
  ],
});

const Chef = model<Chef>("Chef", chefSchema);

export default Chef;

/*

 {"name": "Yossi shitrit", "image":"abc" , "description": "blalslds", "restaurants": []}
 
 */
