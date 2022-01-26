const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/index-dark', (req, res, next ) => {
    res.render('index-dark', {
    });
  });
  
router.post('/index-dark', (req, res, next) => {
    res.render('index-dark');
    console.log(req.body);
    
}); 
  
// router.use((req, res, next) => {
// res.render('404');
// });

exports.routes = router;