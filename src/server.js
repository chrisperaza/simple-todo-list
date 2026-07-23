// Import dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import passport from 'passport';
import session from 'express-session';
import passportGithub from 'passport-github2';
// Import index routes
import indexRoutes from './routes/indexRoutes.js';
// Import database
import { connectDB } from './config/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Get passport github Strategy property
// This is to make the authentication
const GitHubStrategy = passportGithub.Strategy;

// Middleware
app
  .use(cors()) // Let our API comunicates with other websites
  .use(express.json()) // Translate JSON format to JavaScript
  // Authentication
  .use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false, // To be able to test with Thunder Client
        sameSite: 'lax', // To be able to test with Thunder Client
      },
    }),
  )
  .use(passport.initialize())
  .use(passport.session());

// Connect to database
connectDB();

// Use index routes
app.use('/', indexRoutes);

// Authentication
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    },
  ),
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Login route
app.get('/', (req, res) => {
  res.send(
    req.session.user !== undefined
      ? `Log in as ${req.session.user.displayName}`
      : `Logged Out`,
  );
});
app.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/',
    session: false,
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  },
);

// Run server
app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
