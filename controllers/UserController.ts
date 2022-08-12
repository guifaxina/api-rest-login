import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  async register(req: Request, res: Response) {
    const require = req.body;

    const user = new User({
      username: require.username,
      email: require.email,
      password: require.password,
    });
    try {
      const userSaved = await user.save();
      res.send(userSaved);
    } catch (error) {
      res.status(400).json({
        error,
        message: "Registration failed",
      });
    }
  }
  async login(req: Request, res: Response) {
    const foo = await User.findOne({ email: req.body.email })
    res.send(foo);
  }
}

export default new UserController();
