var express = require('express');
var www = require('../bin/www');
var serv = www.server

var router = express.Router();


var is_loged = false;
var user = null;
/* GET home page. */
router.get('/', function(req, res ,next) {
  if(is_loged){
    res.render('user',{'id':user.id,'profile':user.profile});
  }

  else{
    res.send('login before come to this page');
  }
});

router.get('/hi',function(req,res,next){
  is_loged = true
  user = require('./home').user;
  res.redirect('/user')
})

module.exports = router;
