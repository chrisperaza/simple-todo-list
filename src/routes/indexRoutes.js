// Import dependencies
import express from 'express';

const router = express.Router();

// Main route
router.get('/', (req, res) => {
  res.send('To-do list app is running');
});

// Export router
export default router;
