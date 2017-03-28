

// Includes
var express = require('express');
var router = express.Router();
//---------------------------------



//-------------------------------<Get>-----------------------------------------

// Get the user page directly
router.get('/', function(req, res ,next) {

  if (req.session.user!=null){

      res.render('user',{'profile':req.session.user});

  }
  else{
    res.send('login before come to this page');
  }



});
//---------------------------------------------------------------------------


// Get the user page by redirect
router.get('/goto_user',function(req,res,next){
  res.redirect('/user');
})
//------------------------------------------------



//--------------------------<<Exports>>--------------------------

// Export to the app
module.exports = router;
//----------------------
