import Chef from "../db/models/chefSchema";
import BaseService from "./BaseService";
import mongoose from "mongoose";

class ChefService extends BaseService {
  constructor(model: mongoose.Model<any, {}, {}, {}>) {
    super(model);
  }
}

/*
 class ChefService {
   create
   static addChef = (body: any) => {
     return Chef.create(body)
       .then((chef) => {
         return chef;
       })
       .catch((error) => console.log(error));
   };

   read
   static getChef = (id: string) => {
     return Chef.findById(id)
       .then((chef) => {
         return chef;
       })
       .catch((error) => console.log(error));
   };

   update
   static updateChef = (body: any, id: string) => {
     return Chef.findByIdAndUpdate(id, body)
       .then(() => {
         return Chef.findById(id);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   delete
   static deleteChef = (id: string) => {
     return Chef.findByIdAndDelete(id)
       .then((chef) => {
         return chef;
       })
       .catch((error) => {
         console.log(error);
       });
   };
 }  

 const ChefService = new BaseService(Chef); 
 */

const chefService = new ChefService(Chef);

export default chefService;
