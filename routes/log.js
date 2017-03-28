

// Includes
var express = require('express');
var controller = require('../controller/control_users');
var db = require('../my_data_base/my_users.js').users;
var router = express.Router();
//------------------------------------------------------



//-------------------------------<Get>-----------------------------------------

// Get the log page directly
router.get('/', function(req, res, next) {
  if(req.session.user!=null)
    res.redirect('/user/goto_user');
  else {
    res.render('log');
  }
});
//----------------------------------------


// Get the log page by redirect
router.get('/goto_log',function(req, res, next) {
  res.redirect('/log');
});
//----------------------------------------------------------



//-------------------------------<Post>-----------------------------------------

// Post : the user want to log
router.post('/log_me',function(req, res, next){
  /* Controlling the information  */
  var ctr = controller.ctr_users(req,res,next);

  if(ctr.v){
    /* Existe */
    db[ctr.email]['is_logged'] = true;
    req.session.user = db[ctr.email];

    res.redirect('/user/goto_user');
  }
  else{
    /* Doesn't existe */

    //TODO create factid user
    //TODO send validation code to the email user
    //TODO wait validation
    
    res.redirect('/log/goto_log');
  }
})
//-----------------------------------------------



//--------------------------<<Exports>>--------------------------

// Export to the app
module.exports = router;
//----------------------
