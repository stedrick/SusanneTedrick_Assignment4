var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    ID: String,
    Content: String
});

module.exports = mongoose.model('Note', NoteSchema);