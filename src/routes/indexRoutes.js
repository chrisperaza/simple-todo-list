// Import dependencies
import express from 'express';
// Import to-do routes
import todoRoutes from './todoRoutes.js';

const router = express.Router();

// Main route
router.get('/', (req, res) => {
  res.send('To-do list app is running...');
});

// Use to-Do routes
router.use('/todo', todoRoutes);

// Export router
export default router;
