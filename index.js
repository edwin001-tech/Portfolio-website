const path = require('path');
const errorcontroller = require('./controllers/error-controller');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');




const mainroutes = require('./routes/main-routes');
const database = require('./util/database');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
/** mysql test code */

// database.execute('SELECT * FROM comments')
// .then(result => {
//   console.log(result);
// })
// .catch(err => {
//   console.log(err);
// });

app.get('/index-dark', mainroutes.routes);
app.post('/index-dark', mainroutes.routes);
app.get('/display', mainroutes.routes);
app.get('/404', errorcontroller.get404);


//go to main-routes.js in routes folder
// app.get('/index-dark', (req, res, next ) => {
//   res.render('index-dark');
// });

// app.post('/index-dark', (req, res, next) => {
//   res.render('index-dark');
//    console.log(req.body);
  
// }); 

// app.use((req, res, next) => {
//   res.render('404');
// });

app.listen(3000);
