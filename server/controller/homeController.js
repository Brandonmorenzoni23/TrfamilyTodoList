const jwt = require("jsonwebtoken");
const pool = require("../config/db");
const jwtGenerator = require("../utils/jwtGenerator");


exports.postTodo = async (req, res) => {
    console.log(req.body)
    const comment = req.body.writeTodo.todo
    console.log(comment)
    const user = req.body.writeTodo.user
    console.log(user)
const post = new Post ({comment: comment, user: user})
await post.save();
res.json({ message: "Todo Added" });
}

exports.getTodos = async (req, res) => {
    console.log(req)
   try {
    const posts = await Post.find({ user: req.params.userId });
    console.log(posts)
    res.json(posts)
   } catch (error) {
    res.json({message: "error"})
   }
}