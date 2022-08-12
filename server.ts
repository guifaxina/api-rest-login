import dotenv from "dotenv"; dotenv.config();
import express from "express";
import apiRouter from "./routes/userRouter";
import mongoose from "mongoose";

const app = express();
const MONGO_CONNECTION_URI = "mongodb://localhost:27017/API-REST-LOGIN"

mongoose.connect(MONGO_CONNECTION_URI, (error) => {
    if (error) 
        console.log(error)
     else 
        console.log("Mongo connected successfully");
})

app.use(express.json())
app.use('/user', apiRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT} 🤖`)
});