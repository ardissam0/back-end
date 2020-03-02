require('dotenv').config();
const server = require('./api/server.js');

/* verify that our server is running */
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server online...`);
});