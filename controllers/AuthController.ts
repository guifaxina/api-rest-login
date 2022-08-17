import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.header("authorization-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userVerified;
    console.log(req.user);
    
    next();
  } catch (error) {
    return res.status(401).send("Access Denied");
  }
  res.send("Access accepted");
}
