require('dotenv').config();

const createServer = require('./createServer');

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
    console.log(`Logging the port details ${details.port}`);
  }
);
