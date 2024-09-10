const express = require('express');

const router = express.Router();

const userData = [];


router.get('/', (req, res, next)=>{
    res.render('homePage', {title: 'Home Page'});
});

router.post('/admin', (req, res, next)=>{
    userData.push(req.body);
    res.redirect('/users');
});

router.get('/users', (req, res, next)=>{
    res.render('usersPage', {title: 'User\'s Page', users: userData});
    console.log(userData);
})

module.exports = router;