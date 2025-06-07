// models/User.js — defines the User schema and virtual friendCount
const { Schema, model } = require('mongoose'); // import Mongoose

const userSchema = new Schema(
  {
    username: {
      type: String,          // username text
      unique: true,          // must be unique
      required: true,        // required field
      trim: true,            // trim whitespace
    },
    email: {
      type: String,          // email string
      required: true,        // required field
      unique: true,          // must be unique
      match: [/.+@.+\..+/, 'Please enter a valid email address'], // email format validator
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, // link to Thought model
        ref: 'Thought',              // reference name
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId, // link to User model for friends
        ref: 'User',                 // reference name
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,      // include virtuals in JSON
    },
    id: false,            // prevent duplicate _id field
  }
);

// Virtual: friendCount returns the length of friends array
userSchema.virtual('friendCount').get(function () {
  return this.friends.length; // return count of friends
});

const User = model('User', userSchema); // create User model

module.exports = User;                  // export the model
// end of file
