import Chef from "../db/models/chefSchema.js";

class ChefService {
  //create
  static addChef = (body) => {
    return Chef.create(body)
      .then((chef) => {
        return chef;
      })
      .catch((error) => console.log(error));
  };

  //read
  static getChef = (id) => {
    return Chef.findById(id)
      .then((chef) => {
        return chef;
      })
      .catch((error) => console.log(error));
  };

  //update
  static updateChef = (body, id) => {
    return Chef.findByIdAndUpdate(id, body)
      .then(() => {
        return Chef.findById(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //delete
  static deleteChef = (id) => {
    return Chef.findByIdAndDelete(id)
      .then((chef) => {
        return chef;
        s;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default ChefService;
