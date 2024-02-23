import express from 'express'
import { Post } from '../model/model.js';

const APIrouter = express.Router();

APIrouter.post("/addPost", (req, res) => {
    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author
    });
  
    newPost
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  });


//get post
APIrouter.get("/getPost", (req, res) => {
  Post.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});


//test Method
APIrouter.get("/test", (req, res) => {
    res.send("Hello World");
});
  
export { APIrouter };