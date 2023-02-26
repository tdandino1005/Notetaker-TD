// Dependencies: express, path
const path = require('path');
const router = require('express').Router();

// Routing
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Exporting
module.exports = router;