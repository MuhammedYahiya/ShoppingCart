var express = require('express');
var router = express.Router();

const userHelpers = require('../helpers/user-helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Puma ",
      category:"T-shirt",
      description:'Men Color Block Round Neck White T-Shirt',
      image:'https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/t-shirt/n/0/q/xs-60580102-puma-original-imag76m4fp4kcwuy.jpeg?q=70'
    },
    {
      name:"Puma ",
      category:"T-shirt",
      description:'Men Color Block Round Neck White T-Shirt',
      image:'https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/t-shirt/n/0/q/xs-60580102-puma-original-imag76m4fp4kcwuy.jpeg?q=70'
    },
    {
      name:"Puma ",
      category:"T-shirt",
      description:'Men Color Block Round Neck White T-Shirt',
      image:'https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/t-shirt/n/0/q/xs-60580102-puma-original-imag76m4fp4kcwuy.jpeg?q=70'
    },
    {
      name:"Puma ",
      category:"T-shirt",
      description:'Men Color Block Round Neck White T-Shirt',
      image:'https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/t-shirt/n/0/q/xs-60580102-puma-original-imag76m4fp4kcwuy.jpeg?q=70'
    },

  ]
  res.render('index', { products });
});
router.get('/login',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    console.log(response);
  })
})


module.exports = router;
