import { Schema, model } from "mongoose";

interface Rest {
  name: string;
  image: string;
  dishes: string;
}

const resturantSchema = new Schema<Rest>({
  name: { type: String, trim: true, required: true, default: "" },
  image: { type: String, trim: true, required: true, default: "" },
  dishes: [
    { type: Schema.Types.ObjectId, ref: "Dish", required: true, default: [] },
  ],
});

const Resturant = model<Rest>("Resturant", resturantSchema);

export default Resturant;

/*

{"name": "modesta", "image":"bbb" , "chef": "616403fd1cb913bcfa012c45","dishes": "616404581cb913bcfa012c47"}

*/
