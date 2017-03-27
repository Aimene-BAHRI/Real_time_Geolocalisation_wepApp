

// Includes
var express = require('express');
var router = express.Router();
//--------------------------------



//-------------------------------<Get>-------------------------

// Get the dashboard diectly
router.get('/', function(req, res, next) {
  req.session.user=null;
  console.log(req.session)
  res.render('dashboard');
});
//---------------------------------------



//--------------------------<<Exports>>--------------------------

// Export to the app
module.exports = router;
//----------------------
