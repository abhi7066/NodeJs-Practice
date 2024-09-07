const path = require('path');

const express = require('express');
const mainRoute = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // to define a static folder and name could be anything and these pages can access directly.

app.use(mainRoute);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);