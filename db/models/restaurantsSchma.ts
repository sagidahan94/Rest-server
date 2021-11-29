import { Schema, model } from "mongoose";

interface Rest {
  name: string;
  chefName: string;
  image: string;
  dishes: string;
}

const restaurantSchema = new Schema<Rest>({
  name: { type: String, trim: true, required: true },
  chefName: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: "Dish", required: true }],
});

const Restaurant = model<Rest>("Restaurant", restaurantSchema);

export default Restaurant;

/*

{"name": "modesta", "chefName": "", "image":"bbb" ,"dishes": "["616404581cb913bcfa012c47"]"}

*/

/* new fields
openingHours: string 
openDate: Date
popular: boolean 
pageImage: string
*/
