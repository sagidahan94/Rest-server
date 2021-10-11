import Dish from "../db/models/dishesSchema.js";

class DishService {
  //create
  static addDish = (body) => {
    return Dish.create(body)
      .then((dish) => {
        return dish;
      })
      .catch((error) => console.log(error));
  };

  //read
  static getDish = (id) => {
    return Dish.findById(id)
      .then((dish) => {
        return dish;
      })
      .catch((error) => console.log(error));
  };

  //update
  static updateDish = (body, id) => {
    return Dish.findByIdAndUpdate(id, body).then(() => {
      return Dish.findById(id).catch((error) => {
        console.log(error);
      });
    });
  };

  //delete
  static deleteDish = (id) => {
    return Dish.findByIdAndDelete(id)
      .then((dish) => {
        return dish;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default DishService;
