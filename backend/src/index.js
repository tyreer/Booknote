require('dotenv').config();

const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: use Express middleware to handle cookies (JWT)
// TODO: use Express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  details => {
    console.log(`Logging these ${details.port}`);
  }
);
