const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

/* routers */
const authRouter = require('./auth/authRouter.js');
// const recipeRouter = require('./recipes/recipeRouter.js');

/* middleware */
server.use(express.json());
server.use(helmet());
server.use(cors());

/* routes */
server.use('/api/auth', authRouter);

/* endpoints */
server.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' });
});

module.exports = server;
