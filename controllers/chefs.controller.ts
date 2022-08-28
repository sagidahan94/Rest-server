import ChefService from "../services/chefs.service";
import BaseController from "./baseController";

export default class ChefController extends BaseController {}

// const chefController = new ChefController(ChefService);

// export default chefController.router;

/**
 * @api {get} /chefs/:id get chef
 * @apiName GetChef
 * @apiGroup Chefs
 *
 * @apiParam {Number} id Chef unique ID.
 *
 * @apiSuccess {Number} _id UniqueID of the Chef.
 * @apiSuccess {String} name  name of the Chef.
 * @apiSuccess {String} image  Src of the image of the Chef.
 * @apiSuccess {String} description  description of the Chef.
 * @apiSuccess {ObjectId[]} resturants  ObjectId of the resturants of the Chef.
 *
 * @apiSuccessExample Success-Response:
 * {"_id":"616d148874cd008b404b2fd7","name":"Yossi shitrit","image":"abc","description":"marocco","resturants":[],"__v":0}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {post} /chefs/ add chef
 * @apiName AddChef
 * @apiGroup Chefs
 *
 * @apiBody {String} name of the Chef.
 * @apiBody {String} image of the Chef.
 * @apiBody {String} description of the Chef.
 * @apiBody {ObjectId[]} array of the id of the resturants Chef.
 *
 * @apiSuccess {String} name  name of the Chef.
 * @apiSuccess {String} image  Src of the image of the Chef.
 * @apiSuccess {String} description  description of the Chef.
 * @apiSuccess {ObjectId[]} resturants  ObjectId of the resturants of the Chef.
 * @apiSuccess {Number} _id UniqueID of the Chef.
 *
 * @apiSuccessExample Success-Response:
 *{"name":"Yossi shitrit","image":"abc","description":"marocco","resturants":[],"_id":"616d15cbdc6342ffd4a76bd7","__v":0}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {put} /chefs/:id update chef
 * @apiName UpdateChef
 * @apiGroup Chefs
 *
 * @apiParam {Number} id Chef unique ID.
 *
 * @apiBody {String} name of the Chef.
 * @apiBody {String} image of the Chef.
 * @apiBody {String} description of the Chef.
 * @apiBody {ObjectId[]} array of the id of the resturants Chef.
 *
 * @apiSuccess {Number} _id UniqueID of the Chef.
 * @apiSuccess {String} name  name of the Chef.
 * @apiSuccess {String} image  Src of the image of the Chef.
 * @apiSuccess {String} description  description of the Chef.
 * @apiSuccess {ObjectId[]} resturants  ObjectId of the resturants of the Chef.
 *
 * @apiSuccessExample Success-Response:
 * {"_id":"616d15cbdc6342ffd4a76bd7","name":"Yossi shitrit","image":"abc","description":"marocco","resturants":[],"__v":0} *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {delete} /chefs/:id Delete chef
 * @apiName DeleteChef
 * @apiGroup Chefs
 *
 * @apiParam {Number} id Chef unique ID.
 *
 *
 * @apiSuccess {Number} _id UniqueID of the Chef.
 * @apiSuccess {String} name  name of the Chef.
 * @apiSuccess {String} image  Src of the image of the Chef.
 * @apiSuccess {String} description  description of the Chef.
 * @apiSuccess {ObjectId[]} resturants  ObjectId of the resturants of the Chef.
 *
 * @apiSuccessExample Success-Response:
 * {"_id":"616d15cbdc6342ffd4a76bd7","name":"Yossi shitrit","image":"abc","description":"marocco","resturants":[],"__v":0} *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */
