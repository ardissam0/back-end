const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const restricted = require('../middleware/restricted.js');

/* routers */
const authRouter = require('./auth/authRouter.js');
const recipesRouter = require('./recipes/recipesRouter.js');
const categoriesRouter = require('./categories/router.js');
const stepsRouter = require('./steps/router.js');
const ingredientsRouter = require('./ingredients/router.js');

/* middleware */
server.use(express.json());
server.use(helmet());
server.use(cors());

/* routes */
server.use('/api/auth', authRouter);
server.use('/api/recipes', restricted, recipesRouter);
server.use('/api/categories', restricted, categoriesRouter);
server.use('/api/steps', restricted, stepsRouter);
server.use('/api/ingredients', restricted, ingredientsRouter);

/* endpoints */
server.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' });
});

module.exports = server;
