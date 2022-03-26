const commentscontroller = require('../controllers/comments-controller');
const pagecontroller = require('../controllers/page-controller');
// const errorcontroller = require('../controllers/error-controller');
const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

//anyone add comment
router.post('/index-dark', commentscontroller.postComment);

//main page
router.get('/index-dark', pagecontroller.getIndexPage);

//display comments
router.get('/display', commentscontroller.getComments);

//404
// router.get('/404', errorcontroller.get404);
  

exports.routes = router;