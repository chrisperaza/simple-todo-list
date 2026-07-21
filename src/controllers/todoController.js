// Import mongoose
import mongoose, { isValidObjectId } from 'mongoose';
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

// ******************************
// **** GET TODO BY ID (GET) ****
// ******************************
export const getTodoById = async (req, res) => {
  try {
    // Get id from route params
    const { id } = req.params;

    // Validate id with Mongoose
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid To-do ID',
      });
    }

    // Get todo by id
    const todo = await Todo.findById(id);

    // If todo not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'To-do not found',
      });
    }

    // If todo found
    return res.status(200).json({
      success: true,
      message: 'To-do fetched successfully',
      data: todo,
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
// **** UPDATE TO-DO (PUT) ****
// ******************************
export const updateTodo = async (req, res) => {
  try {
    // Get id from route params
    const { id } = req.params;
    // Get data from user
    const { title, description } = req.body;

    // Validate id with Mongoose
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid To-do ID',
      });
    }

    // If title is empty
    if (!title || title.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Title is required',
      });
    }

    // Update to-do
    const todo = await Todo.findByIdAndUpdate(
      id, // Item to update
      { title, description }, // Data to update
      { new: true, runValidators: true }, // Options: 'new' return the updated item, and 'runValidators' runs schema validators
    );

    // If todo not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'To-do not found',
      });
    }

    // If todo found and updated
    return res.status(200).json({
      success: true,
      message: 'To-do updated successfully',
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
