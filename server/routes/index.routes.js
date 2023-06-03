import { Router } from "express";
import { createTodoList, deleteTodoLists, getTodoList, getTodoLists, updateTodoLists } from "../controllers/index.controllers.js";

const router = Router()

router.get('/api/todolist', getTodoLists)
router.get('/api/todolist/:id',getTodoList)
router.post('/api/todolist', createTodoList)
router.put('/api/todolist/:id', updateTodoLists)
router.delete('/api/todolist/:id', deleteTodoLists)

export default router