var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.post('/log',function(req,res,next){
    res.redirect('/log/redir_log');
  });

module.exports = router;
