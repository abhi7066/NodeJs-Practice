const express = require('express');

const router = express.Router();

const products = [];


router.get('/', (req, res, next)=>{
    res.render('homePage', {title: 'Home Page'});
});

router.post('/admin', (req, res, next)=>{
    products.push(req.body);
    res.redirect('/users');
});

router.get('/users', (req, res, next)=>{
    res.render('usersPage', {title: 'User\'s Page'});
    console.log(products);
})

module.exports = router;