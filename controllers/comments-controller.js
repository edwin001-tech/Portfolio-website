const Comment = require('../models/comments.js');

exports.postComment = (req, res, next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const comment = req.body.comment;

    const yourcomment = new Comment(name, email, comment);
    yourcomment
        .save()
        .then(() => {
            console.log(req.body);
            res.redirect('/index-dark');
        })
    .catch(err => console.log(err));
    
};

exports.getComments = (req, res, next) =>{
    Comment.fetchAll()
        .then(([rows]) => {
            res.render('display', {
                data: rows,
            });
            console.log(rows)
        })
        .catch(err => console.log(err));
};