// Import model
import Todo from '../models/todoModel.js';

// ******************************
// **** CREATE TODO (POST) ****
// ******************************
export const createTodo = async (req, res) => {
  try {
    // Get user input
    const { title, description } = req.body;
    // If title is empty
    if (!title || title.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Title is required',
      });
    }

    // Create todo
    const todo = await Todo.create({
      title,
      description,
    });

    // Return a success message and todo
    return res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

// ******************************
// **** GET ALL TODO (GET) ****
// ******************************
export const getAllTodos = async (req, res) => {
  try {
    // Search all elements in the collection
    const todos = await Todo.find({}); // The empty object means all elements

    // Return a success message and todos
    return res.status(200).json({
      success: true,
      message: 'To-do list fetched successfully',
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
