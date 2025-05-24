const names = [
    'Aaran', 'Aaren', 'Aarez', 'Aaron', 'Abbas', 'Abdul', 'Smith', 'Jones', 'Ze', 'Zion', 'Xander',
    'Grace', 'Tamar', 'Alex', 'Mark', 'Sarah', 'Nathaniel', 'Parker',
];
const thoughtsText = [
    'Coding makes life beautiful.',
    'React is amazing!',
    'TypeScript makes development safer.',
    'Express simplifies backend development.',
    'MongoDB is incredibly flexible.',
    'Deploying to Render is smooth and easy.',
    'Learning every day makes a difference.',
    'Collaborating with others is essential to success.',
];
const reactionText = [
    'I totally agree!',
    'That makes perfect sense!',
    'Haha, I love that.',
    'Been there before!',
    'So true!',
    'Well said!',
];
// Get random item from array
export const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// Get a random full name
export const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
// Generate an email from name
export const getRandomEmail = (name) => `${name.toLowerCase().replace(' ', '')}@example.com`;
// Generate random thoughts with reactions
export const getRandomThoughts = (count, usernames) => {
    const thoughts = [];
    for (let i = 0; i < count; i++) {
        thoughts.push({
            thoughtText: getRandomArrItem(thoughtsText),
            username: getRandomArrItem(usernames),
            reactions: [
                {
                    reactionBody: getRandomArrItem(reactionText),
                    username: getRandomArrItem(usernames),
                },
                {
                    reactionBody: getRandomArrItem(reactionText),
                    username: getRandomArrItem(usernames),
                },
            ],
        });
    }
    return thoughts;
};
