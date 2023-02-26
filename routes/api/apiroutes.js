//  Dependencies
const apiRouter = require('express').Router();
const { Router } = require('express');
// const fsUtils = require('../helpers/fsUtils.js');
// const uuid = require('../helpers/uuid');

// GET route for retrieving all the notes
apiRouter.get('/notes', (req, res) => {
    fsUtils.readFromFile('./db/db.json')
        .then(notes => {
            res.json(JSON.parse(notes));
        })
});

// POST route for saving a new note
apiRouter.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    fsUtils.readAndAppend(newNote, './db/db.json')
    const response = {
        status: "success", body: newNote
    }
    res.json(response);
});

// DELETE route for deleting a note
apiRouter.delete('/notes/:id', (req, res) => {
    fsUtils
        .removeNote(req.params.id, './db/db.json')
    const response = {
        status: "success"
    }
    res.json(response);
});

// Exporting
module.exports = apiRouter;