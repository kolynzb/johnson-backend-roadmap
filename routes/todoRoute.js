const express = require("express");
const {
  getAllTodos,
  createTodo,
  getTodoById,
} = require("../controllers/todoContoller");
const route = express.Router();

route.get("/", getAllTodos);
route.post("/", createTodo);
route.get("/:id", getTodoById);

module.exports = route;
