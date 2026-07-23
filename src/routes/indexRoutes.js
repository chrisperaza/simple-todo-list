// Import dependencies
import express from 'express';
import passport from 'passport';
// Import to-do routes
import todoRoutes from './todoRoutes.js';

const router = express.Router();

// Main route
router.get('/', (req, res) => {
  res.send('To-do list app is running...');
});

// Use to-Do routes
router.use('/todo', todoRoutes);

// Authentication routes
/*** login ***/
router.get('/login', passport.authenticate('github'), (req, res) => {});
/*** logout ***/
router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

// Export router
export default router;
