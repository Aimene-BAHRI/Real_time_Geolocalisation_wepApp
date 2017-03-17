var express = require('express');
var controller = require('../controller/control_users')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('log');
});

//router.post('/home',controller.ctr_users );
router.post('/home',function(req,res,next){
  var ctr = controller.ctr_users(req,res,next)

  if(ctr.v)
    res.render('home',ctr.user)
  else
    res.json(ctr.user)
  });

module.exports = router;
