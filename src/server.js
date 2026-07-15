// Import dependencies
import express from 'express';
import cors from 'cors';
// Import index routes
import indexRoutes from './routes/indexRoutes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Let our API comunicates with other websites
app.use(express.json()); // Translate JSON format to JavaScript

// Use index routes
app.use('/', indexRoutes);

// Run server
app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
