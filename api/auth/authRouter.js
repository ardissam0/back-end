const express = require('express');
const bcrypt = require('bcryptjs');
const secret = require('../../config/secrets.js');
const jwt = require('../../utils/generateToken.js');

/* bring in our db */
const Users = require('./authModel.js');

const router = express.Router();

/* endpoints */

/* GET users */
router.get('/', (req, res) => {
    Users.getUsers()
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(400).json({ error: 'Unable to retrieve users.' });
        })
});

/* POST to register a new user */
router.post('/register', (req, res) => {
    /* set our request body to be our potential new user
        hash the password using bcrypt, then authorize a token
        and return a successful registration message */
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    const token = jwt.generateToken(user);

    Users.register(user)
        .then(newUser => {
            res.status(201).json({
                id: newUser[0],
                username: user.username,
                token
            });
        })
        .catch(err => {
            res.status(400).json({ error: 'There was an error creating that user.' });
        })
});

/* POST to login */
router.post('/login', (req, res) => {

    const { username, password } = req.body;
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.generateToken(user);
                res.status(201).json({ success: 'You have logged in.', id: user.id, username: user.username, token });
            }
            else {
                res.status(401).json({ error: 'Incorrect username or password. Try again.' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Something went wrong.' });
        })
});

/* DELETE a user */
router.delete('/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);
    Users.deleteUser(id)
        .then(del => {
            res.status(200).json({ success: 'account deleted' });
        })
        .catch(err => {
            res.status(400).json({ error: 'Unable to delete account.' });
        })
});

/* making sure our router is working */
router.get('/', (req, res) => {
    res.status(200).json({ auth: 'up' });
});

module.exports = router;