import db from '../config/connection.js';
import User from '../models/User.js';
import Thought from '../models/Thought.js';
import cleanDB from './cleanDB.js';
import { getRandomName as getRandomUsername, getRandomEmail, getRandomThoughts } from './data.js';
import { ObjectId } from 'mongodb';
try {
    await db();
    await cleanDB();
    await User.deleteMany({});
    await Thought.deleteMany({});
    const users = [];
    for (let i = 0; i < 10; i++) {
        const _id = new ObjectId();
        const username = getRandomUsername();
        const email = getRandomEmail(username);
        const thoughts = [];
        const friends = [];
        users.push({ thoughts, friends, _id, username, email, friendsCount: 1 });
    }
    const createdUsers = await User.insertMany(users);
    const usernames = createdUsers.map(user => user.username);
    // Gera os pensamentos para os usuários
    const thoughts = getRandomThoughts(10, usernames);
    await Thought.insertMany(thoughts);
    console.table(users);
    console.info('🌱 Seeding complete with users and thoughts!');
    console.table(thoughts);
    process.exit(0);
}
catch (error) {
    console.error('❌ Erro ao rodar o seed', error);
    process.exit(1);
}
export default {
    getRandomUsername,
    getRandomEmail
};
