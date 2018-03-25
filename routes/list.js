const list = function(req, res){
    res.render('list', { title: 'Notes List' });
};
module.exports = {
    list
};
