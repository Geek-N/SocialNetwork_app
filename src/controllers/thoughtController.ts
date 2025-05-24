import { Request, Response } from 'express';
import Thought from '../models/Thought';
import User from '../models/User';

// Get all thoughts
export const getThoughts = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch thoughts', error });
  }
};

// Get a single thought by ID
export const getSingleThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      res.status(404).json({ message: 'Thought not found' });
    } else {
      res.json(thought);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch the thought', error });
  }
};

// Create a new thought
export const createThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newThought = await Thought.create(req.body);
    await User.findByIdAndUpdate(req.body.userId, {
      $push: { thoughts: newThought._id }
    });
    res.status(201).json(newThought);
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to create thought', error: error.message });
  }
};

// Update a thought
export const updateThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updated = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Thought not found' });
    } else {
      res.json(updated);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update thought', error });
  }
};

// Delete a thought
export const deleteThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleted = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!deleted) {
      res.status(404).json({ message: 'Thought not found' });
    } else {
      res.json({ message: 'Thought deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete thought', error });
  }
};

// Add a reaction to a thought
export const addReaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updated = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    if (!updated) {
      res.status(404).json({ message: 'Thought not found' });
    } else {
      res.json(updated);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to add reaction', error });
  }
};

// Remove a reaction from a thought
export const removeReaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updated = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    if (!updated) {
      res.status(404).json({ message: 'Thought not found' });
    } else {
      res.json(updated);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove reaction', error });
  }
};
