const express = require('express');
const router = express.Router();

router.post('/connect', (req, res) => {
    res.json({ message: 'Connect bank endpoint' });
});

router.get('/accounts', (req, res) => {
    res.json({ message: 'List accounts endpoint' });
});

router.post('/sync/:accountId', (req, res) => {
    res.json({ message: 'Sync account endpoint' });
});

module.exports = router;
