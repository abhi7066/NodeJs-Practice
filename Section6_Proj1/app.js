const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use(router);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next)=>{
    res.send('<h1>Page not found</h1>');
})

app.listen(3000);