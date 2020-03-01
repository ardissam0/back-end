const express = require('express');

const router = express.Router();

/* endpoints */

/* test */
router.get('/', (req, res) => {
    res.status(200).json({ recipes: 'is running' });
});

module.exports = router;
