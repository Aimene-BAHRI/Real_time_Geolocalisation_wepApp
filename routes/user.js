var express = require('express');
var router = express.Router();


var is_loged = false;
var user = null;


router.get('/', function(req, res ,next) {
  if(is_loged){
    res.render('user',{'id':user.id,'profile':user.profile});
  }

  else{
    res.send('login before come to this page');
  }
});

router.get('/goto_user',function(req,res,next){
  is_loged = true
  user = require('./log').user;
  res.redirect('/user');
})

module.exports = router;
