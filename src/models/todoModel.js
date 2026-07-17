// Import dependencies
import mongoose from 'mongoose';

// Create schema
const todoSchema = new mongoose.Schema(
  // Data structure || User data
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true, // Removes extra spaces
    },
    description: {
      type: String,
      default: '',
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  // Schema configuration
  {
    timestamps: true,
  },
);

// Export Todo model
export default mongoose.model('Todo', todoSchema);
