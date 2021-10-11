import Resturant from "../db/models/resturantsSchma.js";

class ResturantService {
  //create
  static addResturant = (body) => {
    return Resturant.create(body)
      .then((rest) => {
        return rest;
      })
      .catch((error) => console.log(error));
  };

  //read
  static getResturant = (id) => {
    return Resturant.findById(id)
      .then((rest) => {
        return rest;
      })
      .catch((error) => console.log(error));
  };

  //update
  static updateResturant = (body, id) => {
    return Resturant.findByIdAndUpdate(id, body)
      .then(() => {
        return Resturant.findById(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //delete
  static deleteResturant = (id) => {
    return Resturant.findByIdAndDelete(id)
      .then((rest) => {
        return rest;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default ResturantService;
