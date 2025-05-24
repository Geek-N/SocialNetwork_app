import { Schema, Types } from 'mongoose';

// Subdocumento Reaction (não será um model)
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date) =>
        timestamp.toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
    }
  },
  {
    _id: false,
    id: false,
    toJSON: {
      getters: true
    }
  }
);

export default reactionSchema;
