var express = require('express');
var router = express.Router();


var i  = 0;



router.get('/', function(req, res ,next) {


    if (req.session.user!=null){
      res.render('user',{'id':req.session.user.id,'profile':req.session.user.profile});
}

  else{
    res.send('login before come to this page');
  }

  res.io.on('connection',function (req,res) {
    console.log('new user '+i+' connected')
    i++;

  }).on('mess',function (m) {
    res.io.emit('msg',m.mess)
  })
});

router.get('/goto_user',function(req,res,next){
  var user = require('./log').user;
  req.session.user = user;
  res.redirect('/user');
})





module.exports = router;
