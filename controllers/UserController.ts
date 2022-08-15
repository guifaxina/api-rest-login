import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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
    const thisUser = await User.findOne({ email: req.body.email });
    const comparePasswords = await bcrypt.compare(req.body.password, thisUser?.password);
    // Auth
    if (!comparePasswords) return res.status(400).send("Email or password incorrect");
    
    const token = jwt.sign({ username: thisUser?.username, email: thisUser?.email }, process.env.TOKEN_SECRET)

    res.header('authorization-token', token)
    res.send("User Logged");
  }
}



export default new UserController();
