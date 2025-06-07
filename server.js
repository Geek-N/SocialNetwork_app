// updated server.js to ensure routes are mounted correctly with clear comments

const express = require('express'); // import Express framework
const db = require('./config/connection'); // import MongoDB connection
const routes = require('./routes'); // import main routes index.js to handle API routing

const PORT = process.env.PORT || 3001; // define server port
const app = express(); // create Express app instance

app.use(express.urlencoded({ extended: true })); // middleware to parse URL-encoded data
app.use(express.json()); // middleware to parse JSON data
app.use('/', routes); // mount all API routes under /api path

// start server after DB connection is open
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`); // log successful server start
  });
});

// end of file
