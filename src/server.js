// Import dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
// Import index routes
import indexRoutes from './routes/indexRoutes.js';
// Import database
import { connectDB } from './config/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Let our API comunicates with other websites
app.use(express.json()); // Translate JSON format to JavaScript

// Connect to database
connectDB();

// Use index routes
app.use('/', indexRoutes);

// Run server
app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
