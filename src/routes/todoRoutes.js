// Import dependencies
import express from 'express';
// Import functions / logic
import {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../controllers/todoController.js';

const router = express.Router();

// ******************************
// **** CREATE TODO (POST) ****
// ******************************
router.post('/add', createTodo);

// ******************************
// **** GET ALL TODO (GET) ****
// ******************************
router.get('/', getAllTodos);

// ******************************
// **** GET TODO BY ID (GET) ****
// ******************************
router.get('/:id', getTodoById);

// ******************************
// **** UPDATE TO-DO (PUT) ****
// ******************************
router.put('/:id', updateTodo);

// Export router
export default router;
