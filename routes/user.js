var express = require('express');
var www = require('../bin/www');
var serv = www.server

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res ,next) {
  if(res.redirected == true)
    console.log('yes')
    else {
      console.log('i dont know')
    }
  res.send()
  /*if(res.redirected)
    res.send('expected redirection')
  else
    res.send('page not found');
*/});



module.exports = router;
