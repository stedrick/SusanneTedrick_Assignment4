const notes = function(req, res){
    res.render('notes', {title: 'Create New Note'});
};
module.exports = {
    notes
};
