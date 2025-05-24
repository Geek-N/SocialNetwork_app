import { Schema, model, Types, Document } from 'mongoose';
import reactionSchema from './Reaction.js';

// Interface to define the structure of a Reaction document
interface IReaction extends Document {
  reactionBody: string;
  username: string;
  createdAt: Date;
}

// Interface to define the structure of a Thought document
interface IThought extends Document {
  thoughtText: string;
  username: string;
  createdAt: Date;
  reactions: Types.DocumentArray<IReaction>;
}

// Schema to Thought
const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
      ref: 'User',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: false,
  }
);

// Virtual to get the number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model<IThought>('Thought', thoughtSchema);

export default Thought;
