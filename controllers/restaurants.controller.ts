import { Request, Response, NextFunction } from "express";
import { IBaseService } from "../services/baseService";
import BaseController from "./baseController";

export default class RestController extends BaseController {
  constructor(service: IBaseService) {
    super(service);
  }

  // Get All
  public async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.query.skip && req.query.limit && req.query.f) {
        let skip = parseInt(req.query.skip as string);
        let limit = parseInt(req.query.limit as string);
        let filter = req.query.f;
        const response = await this.service.getFilterRestaurants(
          skip,
          limit,
          filter
        );
        res.json(response);
      } else {
        const response = await this.service.getAll();
        res.json(response);
      }
    } catch (error) {
      next(error);
    }
  }
}

// const restController = new RestController(ResturantService);

// export default restController.router;

/**
 * @api {get} resturants/:id get Resturant
 * @apiName GetResturant
 * @apiGroup Resturants
 *
 * @apiParam {Number} id Resturant unique ID.
 *
 * @apiSuccess {Number} _id UniqueID of the Resturant.
 * @apiSuccess {String} name  name of the Resturant.
 * @apiSuccess {String} image  Src of the image of the Resturant.
 * @apiSuccess {ObjectId} chefs chef's resturant.
 * @apiSuccess {ObjectId[]} dishes array of dishes in the resturant.
 *
 * @apiSuccessExample Success-Response:
 * {"name": "modesta", "image":"bbb" , "Resturant": "616403fd1cb913bcfa012c45","dishes": "616404581cb913bcfa012c47"}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {post} resturants/ add Resturant
 * @apiName AddResturant
 * @apiGroup Resturants
 *
 * @apiBody {String} name  name of the Resturant.
 * @apiBody {String} image  Src of the image of the Resturant.
 * @apiBody {ObjectId} chefs chef's resturant.
 * @apiBody {ObjectId[]} dishes array of dishes in the resturant.
 *
 * @apiSuccess {String} name  name of the Resturant.
 * @apiSuccess {String} image  Src of the image of the Resturant.
 * @apiSuccess {ObjectId} chefs  chef's resturant.
 * @apiSuccess {ObjectId[]} dishes array of dishes in the resturant.
 * @apiSuccess {Number} _id UniqueID of the Resturant.
 *
 * @apiSuccessExample Success-Response:
 * {"name": "modesta", "image":"bbb" , "chef": "616403fd1cb913bcfa012c45","dishes": "616404581cb913bcfa012c47"}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {put} resturants/:id update Resturant
 * @apiName UpdateResturant
 * @apiGroup Resturants
 *
 * @apiParam {Number} id Resturant unique ID.
 *
 * @apiBody {String} name  name of the Resturant.
 * @apiBody {String} image  Src of the image of the Resturant.
 * @apiBody {ObjectId} chefs  chef's resturant.
 * @apiBody {ObjectId[]} dishes array of dishes in the resturant.
 *
 * @apiSuccess {Number} _id UniqueID of the Resturant.
 * @apiSuccess {String} name  name of the Resturant.
 * @apiSuccess {String} image  Src of the image of the Resturant.
 * @apiSuccess {ObjectId} chefs chef's resturant.
 * @apiSuccess {ObjectId[]} dishes array of dishes in the resturant.
 *
 * @apiSuccessExample Success-Response:
 * {"name": "modesta", "image":"bbb" , "chef": "616403fd1cb913bcfa012c45","dishes": "616404581cb913bcfa012c47"}
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */

/**
 * @api {delete} resturants/:id delete Resturant
 * @apiName DeleteResturant
 * @apiGroup Resturants
 *
 * @apiParam {Number} id Resturant unique ID.
 *
 *
 * @apiSuccess {Number} _id UniqueID of the Resturant.
 * @apiSuccess {String} name  name of the Resturant.
 * @apiSuccess {String} image  Src of the image of the Resturant.
 * @apiSuccess {ObjectId} chefs chef's resturant.
 * @apiSuccess {ObjectId[]} dishes array of dishes in the resturant.
 *
 * @apiSuccessExample Success-Response:
 * {"name": "modesta", "image":"bbb" , "chef": "616403fd1cb913bcfa012c45","dishes": "616404581cb913bcfa012c47"}
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "null"
 *     }
 */
