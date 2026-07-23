// Import dependencies
import express from 'express';
// Import functions / logic
import {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from '../controllers/todoController.js';
// Import middlewares
import { isAuthenticated } from '../middlewares/authentication.js';

const router = express.Router();

// ******************************
// **** CREATE TODO (POST) ****
// ******************************
router.post('/add', isAuthenticated, createTodo);

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
router.put('/:id', isAuthenticated, updateTodo);

// ******************************
// **** TOGGLE TO-DO (PATCH) ****
// ******************************
router.patch('/:id/toggle', isAuthenticated, toggleTodo);

// ******************************
// **** DELETE TO-DO (DELETE) ****
// ******************************
router.delete('/:id', isAuthenticated, deleteTodo);

// Export router
export default router;
