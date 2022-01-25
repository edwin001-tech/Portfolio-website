const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');





// const adminData = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/index-dark', (req, res, next ) => {
  res.render('index-dark');
});

app.post('/index-dark', (req, res, next) => {
  res.render('index-dark');
   console.log(req.body);
  
}); 

app.use((req, res, next) => {
  res.render('404');
});

app.listen(3000);
