import express from "express";
import auth from "../controllers/AuthController";
const router = express.Router();

router.get("/", auth, (req, res) => {
  if (req.user.admin) {
    res.send("Protected data");
  } else {
    res.status(401).send('Access Denied')
  }

});

export default router;
