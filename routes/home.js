var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // todo add sockets to know if the user is already logged
  res.render('home');
});



module.exports = router;
