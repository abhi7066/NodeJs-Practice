const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});