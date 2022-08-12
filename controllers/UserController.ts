import { Request, Response } from "express";

class UserController {
  register(request: Request, response: Response) {
    console.log("Register");
    response.send("reg");
  }
  login(request: Request, response: Response) {
    console.log("Login");
    response.send("log");
  }
}

export default new UserController();
