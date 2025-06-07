# Social Media API

---

## About

This is a backend API for a social media application built using Express.js and MongoDB with Mongoose. It supports user management, thoughts posting, reactions to thoughts, and friend connections — all accessible via a RESTful API designed for testing with Insomnia or similar API clients.

This project serves as a solid foundation for social media features, focusing on robust schema design, CRUD operations, and seamless data relationships.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [Contact](#contact)  
- [License](#license)  

---

## Demo

Currently, this API can be tested locally using Insomnia or Postman. Sample requests are documented below.  

(No live deployment available as this is a backend API.)

---

## Video Walkthrough Link:

[Link](https://app.screencastify.com/watch/Z50mnvrPUpm8l9iWJMlC)
https://app.screencastify.com/watch/Z50mnvrPUpm8l9iWJMlC
---

## Features

- User CRUD operations (Create, Read, Update, Delete)  
- Friend list management (add/remove friends)  
- Thoughts CRUD operations linked to users  
- Reaction subdocuments embedded within Thoughts  
- Timestamp formatting for creation dates  
- Cascade deletion: removing a user deletes their associated thoughts  
- Comprehensive error handling and validation  
- Ready for testing in Insomnia or similar REST clients  

---

## Technologies Used

- Node.js  
- Express.js  
- MongoDB  
- Mongoose ODM  
- JavaScript (ES6+)  
- Insomnia (for API testing)  

---

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/social-media-api.git

2. Navigate into the project directory:
cd social-media-api

3. Install dependencies:
npm install

4. Set up your MongoDB connection string in .env file (create one in the root directory):
MONGODB_URI=your_mongodb_connection_string

## Usage
To start the server locally:
- npm start

## API Endpoints

Users
- GET /api/users — Get all users
- GET /api/users/:userId — Get user by ID
- POST /api/users — Create a new user
- PUT /api/users/:userId — Update a user by ID
- DELETE /api/users/:userId — Delete a user by ID (also deletes associated thoughts)
- POST /api/users/:userId/friends/:friendId — Add a friend to user’s friend list
- DELETE /api/users/:userId/friends/:friendId — Remove a friend from user’s friend list

Thoughts
- GET /api/thoughts — Get all thoughts
- GET /api/thoughts/:thoughtId — Get thought by ID
- POST /api/thoughts — Create a new thought (must include userId)
- PUT /api/thoughts/:thoughtId — Update a thought by ID
- DELETE /api/thoughts/:thoughtId — Delete a thought by ID

Reactions (nested within Thoughts)
- POST /api/thoughts/:thoughtId/reactions — Add a reaction to a thought
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId — Remove a reaction from a thought

## Project Structure
/config
  connection.js           # MongoDB connection setup
/models
  User.js                 # User schema and model
  Thought.js              # Thought and Reaction schemas and models
/routes
  /api
    index.js              # API router aggregator
    userRoutes.js         # User routes
    thoughtRoutes.js      # Thought routes
/server.js                # Entry point, Express server setup

## Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests or open issues for bugs or feature requests.

## Contact 
GitHub: https://github.com/yourusername
Email: your.email@example.com

## License
This project is licensed under the MIT License.

## Acknowledgements
Project requirements from University of California, Irvine
Code assistance and guidance from ChatGPT
MongoDB and Express.js documentation
