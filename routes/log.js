var express = require('express');
var controller = require('../controller/control_users')
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('log');
});
router.post('/log_me',function(req, res, next){
  var ctr = controller.ctr_users(req,res,next)
  if(ctr.v){
    module.exports = {user:ctr.user}
    res.redirect('/user/goto_user');
  }
  else{
    res.redirect('/log/goto_log');
  }
})
  router.get('/goto_log',function(req, res, next) {
    // todo add sockets to know if the user is already logged
        res.redirect('/log');


  });


module.exports = router;
