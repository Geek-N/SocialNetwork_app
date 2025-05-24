import mongoose from 'mongoose';

// Function to connect to the MongoDB database
const db = async (): Promise<typeof mongoose.connection> => {
  try {
    //Using environment variable for MongoDB URI or default to local MongoDB
    const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

    // Connecting to the MongoDB database
    await mongoose.connect(dbURI);
    console.log('Database connected successfully.');

    // Rturning the connection object
    return mongoose.connection;
  } catch (error) {
    // Error handling for connection failure
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to the database.');
  }
};

export default db;
