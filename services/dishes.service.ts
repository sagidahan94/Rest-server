import Dish from "../db/models/dishesSchema";
import BaseService from "./BaseService";

import mongoose from "mongoose";

class DishService extends BaseService {
  constructor(model: mongoose.Model<any, {}, {}, {}>) {
    super(model);
  }
}

/*
class DishService {
  //create
  static addDish = (body: any) => {
    return Dish.create(body)
      .then((dish) => {
        return dish;
      })
      .catch((error) => console.log(error));
  };

  //read
  static getDish = (id: string) => {
    return Dish.findById(id)
      .then((dish) => {
        return dish;
      })
      .catch((error) => console.log(error));
  };

  //update
  static updateDish = (body: any, id: string) => {
    return Dish.findByIdAndUpdate(id, body).then(() => {
      return Dish.findById(id).catch((error) => {
        console.log(error);
      });
    });
  };

  //delete
  static deleteDish = (id: string) => {
    return Dish.findByIdAndDelete(id)
      .then((dish) => {
        return dish;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

const DishService = new BaseService(Dish);
*/

const dishService = new DishService(Dish);

export default dishService;
