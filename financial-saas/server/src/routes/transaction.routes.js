const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'List transactions endpoint' });
});

router.post('/categorize', (req, res) => {
    res.json({ message: 'Manual categorization endpoint' });
});

module.exports = router;
