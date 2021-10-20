import Dish from "../db/models/dishesSchema";
import BaseService from "./BaseService";

import { Model } from "mongoose";

class DishService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }
}

const dishService = new DishService(Dish);

export default dishService;
