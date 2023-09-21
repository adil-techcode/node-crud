import express from "express";
import mongoose from "mongoose";


const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://adiltechcode:aaaabbbb@cluster0.zsk0zyz.mongodb.net/first-app?retryWrites=true&w=majority&appName=AtlasApp")

const db = mongoose.connection;

db.on('error',()=> {
    console.log("not connected")
});
db.once('open', () => {
  console.log('Connected to MongoDB!');
});



import blogRouter from "./routes/blogRouter.js";
app.use("/" , blogRouter);

app.listen(8000,function () {
    console.log("ok ha")
})
