var express = require('express');
var controller = require('../controller/control_users')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/*router.post('/home',function(req, res, next) {
  res.redirect('home',ctr.user);
});*/
router.post('/user',function(req,res,next){
  var ctr = controller.ctr_users(req,res,next)
  console.log('well com : ')
  res.redirect('user')
  /*if(ctr.v == 'true'){
    res.redirect('home');
  }
  else{
    res.redirect('/');
  }*/
  });

module.exports = router;
