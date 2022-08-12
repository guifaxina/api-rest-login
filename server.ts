import dotenv from "dotenv"; dotenv.config();
import express from "express";
import apiRouter from "./routes/userRouter"
const app = express();

app.use('/user', apiRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT} 🤖`)
});