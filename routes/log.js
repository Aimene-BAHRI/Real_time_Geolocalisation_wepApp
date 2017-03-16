var express = require('express');
var controller = require('../controller/control_users')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('log', { title: 'Express' });
});

router.post('/log',controller.ctr_users );

module.exports = router;
