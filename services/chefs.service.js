import ChefModel from "../db/models/chefSchema";

export default getChef = (id) => {
  ChefModel.find(id, (error, result) => {
    if (error) {
      return console.log(error);
    }
    return result;
  });
};

export default addChef = (body) =>{
    ChefModel.create(body).then((chef) => {
        return chef;
    }).catch((error) => console.log(error))
}

export default updateChef = (body, params) => {
    ChefModel.findOneAndUpdate({_id: params.id},body).then((chef) => {
        chef.findOne({_id: params.id}).then((chef) =>{
            return chef;
        }).catch((error) => { console.log(error)});
    });
}

export default deleteChef = (params) => {
    ChefModel.findOneAndDelete({_id: params.id}).then((chef) => {
        return chef
    }).catch((error) => {
        console.log(error)
    });}
