const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const restricted = require('../middleware/restricted.js');

/* routers */
const authRouter = require('./auth/authRouter.js');
const recipesRouter = require('./recipes/recipesRouter.js');
const categoriesRouter = require('./categories/router.js');

/* middleware */
server.use(express.json());
server.use(helmet());
server.use(cors());

/* routes */
server.use('/api/auth', authRouter);
server.use('/api/recipes', restricted, recipesRouter);
server.use('/api/categories', restricted, categoriesRouter);

/* endpoints */
server.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' });
});

module.exports = server;
