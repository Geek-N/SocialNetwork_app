import express from 'express';
import db from './config/connection.js';  // Conection to DB
import routes from './routes/index.js';

// // DB conection
await db();

const app = express();

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Using routes defined in routes/index.js
app.use(routes);

// app.route(routes).get((_req, res) => {
//   res.send('API is running!');
// });

// Define the port to listen on
const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  console.log(err);
  console.log(`API server running on port ${PORT}!`);
});
