import DishService from "../services/dishes.service";
import BaseController from "./BaseController";
import { IBaseService } from "../services/BaseService";

class DishesController extends BaseController {}

const dishesController = new DishesController(DishService);

export default dishesController.router;

/**
 * @api {get} /dish/:id get Dish
 * @apiName GetDish
 * @apiGroup Dishs
 *
 * @apiParam {Number} id Dish unique ID.
 *
 * @apiSuccess {Number} _id UniqueID of the Dish.
 * @apiSuccess {String} name  name of the Dish.
 * @apiSuccess {Number} price  Src of the price of the Dish.
 * @apiSuccess {String} ingredients  ingredients of the Dish.
 * @apiSuccess {ObjectId[]} resturants  ObjectId of the resturants of the Dish.
 *
 * @apiSuccessExample Success-Response:
 * {"name": "chicken" , "price" : "100", "ingredients": "["butter", "chicken"]" , "tags":[], "resturants": []}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {post} /dish/ add Dish
 * @apiName AddDish
 * @apiGroup Dishs
 *
 * @apiBody {String} name of the Dish.
 * @apiBody {Number} price of the Dish.
 * @apiBody {String[]} ingredients of the Dish.
 * @apiBody {String[]} array of the tags.
 * @apiBody {ObjectId[]} array of the id of the resturants Dish.
 *
 * @apiSuccess {String} name of the Dish.
 * @apiSuccess {Number} price of the Dish.
 * @apiSuccess {String[]} ingredients of the Dish.
 * @apiSuccess {String[]} tags array of the tags.
 * @apiSuccess {ObjectId[]} resturants array of the id of the resturants Dish.
 * @apiSuccess {Number} _id UniqueID of the Dish.
 *
 * @apiSuccessExample Success-Response:
 * {"name": "chicken" , "price" : "100", "ingredients": "["butter", "chicken"]" , "tags":[], "resturants": []}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {put} /dish/:id update Dish
 * @apiName UpdateDish
 * @apiGroup Dishs
 *
 * @apiParam {Number} id Dish unique ID.
 *
 * @apiBody {String} name of the Dish.
 * @apiBody {Number} price of the Dish.
 * @apiBody {String[]} ingredients of the Dish.
 * @apiBody {String[]} array of the tags.
 * @apiBody {ObjectId[]} array of the id of the resturants Dish.
 *
 * @apiSuccess {String} name of the Dish.
 * @apiSuccess {Number} price of the Dish.
 * @apiSuccess {String[]} ingredients of the Dish.
 * @apiSuccess {String[]} tags array of the tags.
 * @apiSuccess {ObjectId[]} resturants array of the id of the resturants Dish.
 * @apiSuccess {Number} _id UniqueID of the Dish.
 *
 * @apiSuccessExample Success-Response:
 * {"_id":"616d15cbdc6342ffd4a76bd7", "name": "chicken" , "price" : "100", "ingredients": "["butter", "chicken"]" , "tags":[], "resturants": []}

 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {delete} /dish/:id delete Dish
 * @apiName DeleteDish
 * @apiGroup Dishs
 *
 * @apiParam {Number} id Dish unique ID.
 *
 *
 * @apiSuccess {Number} _id UniqueID of the Dish.
 * @apiSuccess {String} name of the Dish.
 * @apiSuccess {Number} price of the Dish.
 * @apiSuccess {String[]} ingredients of the Dish.
 * @apiSuccess {String[]} tags array of the tags.
 * @apiSuccess {ObjectId[]} resturants array of the id of the resturants Dish.
 *
 *
 * @apiSuccessExample Success-Response:
 * {"_id":"616d15cbdc6342ffd4a76bd7", "name": "chicken" , "price" : "100", "ingredients": "["butter", "chicken"]" , "tags":[], "resturants": []}
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */
