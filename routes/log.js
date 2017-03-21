var express = require('express');
var controller = require('../controller/control_users')
var router = express.Router();

var u = null;

router.get('/', function(req, res, next) {
  if(u!=null)
    if(u.profile.is_logged){
      res.redirect('/user/goto_user');
      }
    else{res.redirect('/log');}
  else {
  res.render('log');
}
});
router.post('/A',function(req, res, next){
  var ctr = controller.ctr_users(req,res,next)
  if(ctr.v){
    u = ctr.user;
    u.profile.is_logged = true;
    module.exports = {user:u}
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
