import Resturant from "../db/models/resturantsSchma";
import BaseService from "./BaseService";

import mongoose from "mongoose";

class ResturantService extends BaseService {
  constructor(model: mongoose.Model<any, {}, {}, {}>) {
    super(model);
  }
}

/*
 class ResturantService {
   create
   static addResturant = (body: any) => {
     return Resturant.create(body)
       .then((rest) => {
         return rest;
       })
       .catch((error) => console.log(error));
   };

   read
   static getResturant = (id: string) => {
     return Resturant.findById(id)
       .then((rest) => {
         return rest;
       })
       .catch((error) => console.log(error));
   };

   update
   static updateResturant = (body: any, id: string) => {
     return Resturant.findByIdAndUpdate(id, body)
       .then(() => {
         return Resturant.findById(id);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   delete
   static deleteResturant = (id: string) => {
     return Resturant.findByIdAndDelete(id)
       .then((rest) => {
         return rest;
       })
       .catch((error) => {
         console.log(error);
       });
   };
 }
 */

const restService = new ResturantService(Resturant);

export default restService;
