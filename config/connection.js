// config/connection.js — sets up Mongoose connection
const { connect, connection } = require('mongoose'); // import Mongoose

connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
}); // connect to MongoDB with default options

module.exports = connection; // export connection object
// end of file