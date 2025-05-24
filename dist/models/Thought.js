import { Schema, model } from 'mongoose';
import reactionSchema from './Reaction.js';
// Schema to Thought
const thoughtSchema = new Schema({
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
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: false,
});
// Virtual to get the number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
export default Thought;
