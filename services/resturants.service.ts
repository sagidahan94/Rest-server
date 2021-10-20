import Resturant from "../db/models/resturantsSchma";
import BaseService from "./BaseService";

import { Model } from "mongoose";

class ResturantService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }

  //delete - overide
  public delete(id: string) {
    const rest = this.model.findById(id);
    console.log(rest);
    return rest;
  }
}
const restService = new ResturantService(Resturant);

export default restService;
