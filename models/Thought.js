// models/Thought.js — defines the Thought and Reaction schemas
const { Schema, model, Types } = require('mongoose');               // import Mongoose
const formatDate = (timestamp) => new Date(timestamp).toLocaleString(); // format helper

// reaction schema (embedded, not a model)
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,        // unique ID for each reaction
      default: () => new Types.ObjectId(), // auto-generate ObjectId
    },
    reactionBody: {
      type: String,                       // reaction text
      required: true,                    // required field
      maxLength: 280,                    // limit to 280 characters
    },
    username: {
      type: String,                      // user who made the reaction
      required: true,                   // required field
    },
    createdAt: {
      type: Date,                       // timestamp
      default: Date.now,                // default to now
      get: formatDate,                  // use getter to format
    },
  },
  {
    toJSON: {
      getters: true,                   // include getters in output
    },
    _id: false,                       // do not generate separate _id for subdocuments
  }
);

// thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,                   // main text content
      required: true,                // required field
      minLength: 1,                  // must be at least 1 character
      maxLength: 280,                // max length 280
    },
    createdAt: {
      type: Date,                   // timestamp
      default: Date.now,            // default to now
      get: formatDate,              // format with getter
    },
    username: {
      type: String,                 // user who created the thought
      required: true,              // required field
    },
    reactions: [reactionSchema],    // array of embedded reactions
  },
  {
    toJSON: {
      virtuals: true,               // include virtuals in JSON
      getters: true,               // enable formatted timestamps
    },
    id: false,                     // prevent duplicate _id
  }
);

// virtual to count reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;     // return number of reactions
});

const Thought = model('Thought', thoughtSchema); // create Thought model

module.exports = Thought;           // export the model
// end of file
