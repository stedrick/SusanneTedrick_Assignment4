const express = require('express');

const router = express.Router();

const ctrlList = require('../routes/list');

const ctrlNotes = require('../routes/notes');

router.get('/list', ctrlList.list);

router.get('/notes', ctrlNotes.notes);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Assignment 4' });
});
module.exports = router;