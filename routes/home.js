var express = require('express');
var router = express.Router();
var socketIo = require('socket.io');

var items = require('../bin/www');
var io = socketIo(items.server)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('page not found');
});


module.exports = router;
