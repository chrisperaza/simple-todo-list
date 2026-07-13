// Import dependencies
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Let our API comunicates with other websites
app.use(express.json()); // Translate JSON format to JavaScript

// Test server
app.get('/', (req, res) => {
  res.send('To-do list app is running');
});

// Run server
app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
