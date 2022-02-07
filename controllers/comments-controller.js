const Comment = require('../models/comments.js');

exports.postComment = (req, res, next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const comment = req.body.comment;

    const yourcomment = new Comment(name, email, comment);
    yourcomment
    .save()
    .then(() => {
        res.redirect('/index-dark');
    })
    .catch(err => console.log(err));
    
};