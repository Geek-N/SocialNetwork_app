import { User, Thought } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
  try {
    await User.deleteMany({});
    console.log('🧹User collection cleaned.');

    await Thought.deleteMany({});
    console.log('🧹Thought collection cleaned.');

  } catch (err) {
    console.error('❌ Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;
