import mongoose from "mongoose";

class BaseService {
  model: mongoose.Model<any, {}, {}, {}>;

  constructor(model: mongoose.Model<any, {}, {}, {}>) {
    this.model = model;
  }

  //create
  public add = (body: any) => {
    return this.model
      .create(body)
      .then((chef) => {
        return chef;
      })
      .catch((error) => console.log(error));
  };

  //read
  public get = (id: string) => {
    return this.model
      .findById(id)
      .then((chef) => {
        return chef;
      })
      .catch((error) => console.log(error));
  };

  //update
  public update = (body: any, id: string) => {
    return this.model
      .findByIdAndUpdate(id, body)
      .then(() => {
        return this.model.findById(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //delete
  public delete = (id: string) => {
    return this.model
      .findByIdAndDelete(id)
      .then((chef) => {
        return chef;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default BaseService;
