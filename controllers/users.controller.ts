import { Request, Response } from "express";
import UserService from "../services/users.service";
import { IBaseService } from "../services/BaseService";
import BaseController from "./BaseController";

// interface IUserService extends IBaseService {
//   register(body: any): Promise<any>;
// }

class UserController extends BaseController {
  // Initialaize route - Override
  public initializeRoutes() {
    this.router.post("/register", this.login.bind(this));
    this.router.post("/sign_in", this.signIn.bind(this));
  }

  // Register
  public async login(req: Request, res: Response) {
    const response = await this.service.register(req.body);
    res.json(response);
  }

  // Sign in
  public async signIn(req: Request, res: Response) {
    const response = await this.service.sign_in(req.body);
    res.json(response);
  }
}

//             exports.profile = function (req: Request, res: Response, next: NextFunction) {
//                 if (req.body.user) {
//                     res.send(req.body.user);
//                     next();
//                 } else {
//                     return res.status(401).json({ message: "Invalid token" });
//                 }
//             };

const userController = new UserController(UserService);

export default userController.router;
