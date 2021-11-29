import Chef from "../db/models/chefSchema";
import BaseService from "./BaseService";
import { Model } from "mongoose";

class ChefService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }

  // get - Override
  public get(id: string) {
    return this.model.findById(id).populate("restaurants");
  }
}

const chefService = new ChefService(Chef);

export default chefService;
