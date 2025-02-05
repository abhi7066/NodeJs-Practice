const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000,  ()=>{
  console.log('Server is running on http://localhost:3000');
});
