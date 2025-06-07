// models/index.js — exports all models from models folder

const User = require('./User');     // import User model
const Thought = require('./Thought'); // import Thought model

module.exports = { User, Thought }; // export models for use in controllers

// end of file
