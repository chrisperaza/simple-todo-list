// Import dependencies
import express from 'express';
// Import functions / logic
import { createTodo } from '../controllers/todoController.js';

const router = express.Router();

// Get all to-do list
router.get('/', (req, res) => {
  res.send('Get all to-do list');
});

// ******************************
// **** CREATE TODO (POST) ****
// ******************************
router.post('/add', createTodo);

// Export router
export default router;
