var express = require('express');
var controller = require('../controller/control_users')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.post('/user',function(req,res,next){
  var ctr = controller.ctr_users(req,res,next)

  if(ctr.v == 'true'){
    module.exports = {user:ctr.user}
    res.redirect('/user/hi');

  }
  else{
    res.redirect('/');
  }

  });

module.exports = router;
