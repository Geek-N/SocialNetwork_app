import { Request, Response } from 'express';
import Thought from '../models/Thought.js';

export const addReaction = async (req: Request, res: Response) => {
  const { thoughtId } = req.params;
  const { reactionBody, username } = req.body;

  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: { reactionBody, username } }
      },
      { new: true }
    );

    if (!updatedThought) {
    res.status(404).json({ message: 'Pensamento não encontrado' });
    }

    res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar reação', error });
  }
};

export const deleteReaction = async (req: Request, res: Response) => {
  const { thoughtId, reactionId } = req.params;

  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $pull: { reactions: { reactionId: reactionId } }
      },
      { new: true }
    );

    if (!updatedThought) {
    res.status(404).json({ message: 'Pensamento não encontrado' });
    }

    res.status(200).json({ message: 'Reação removida com sucesso', updatedThought });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover reação', error });
  }
};

export default {
  addReaction,
  deleteReaction}