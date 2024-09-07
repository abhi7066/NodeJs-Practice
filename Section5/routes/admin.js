const express = require('express');
const { title } = require('process');

const router = express.Router();


router.get('/add-product',(req, res, next)=>{
    res.send('<form action=product method=POST><input type="text" name="titile"><button type="submit">Add Product</button></form>')
});

router.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;