// Import dependencies
import express from 'express';
// Import functions / logic
import { createTodo, getAllTodos } from '../controllers/todoController.js';

const router = express.Router();

// ******************************
// **** CREATE TODO (POST) ****
// ******************************
router.post('/add', createTodo);

// ******************************
// **** GET ALL TODO (GET) ****
// ******************************
router.get('/', getAllTodos);

// Export router
export default router;
