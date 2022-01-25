const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getTodo = (req, res) => {
  res.send("this is the todo list route");
};
const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    let newTodo = await todo.save();
    if (newTodo) return res.json("Todo created successfully");
  } catch (err) {
    res.send(err.message);
  }
};

const getTodoById = async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllTodos, getTodo, createTodo, getTodoById };
