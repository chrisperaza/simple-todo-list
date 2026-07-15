// Import dependencies
import express from 'express';

const router = express.Router();

// Get all to-do list
router.get('/', (req, res) => {
  res.send('Get all to-do list');
});

// Export router
export default router;
