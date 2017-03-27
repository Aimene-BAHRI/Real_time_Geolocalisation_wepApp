
// Include my users database
var users = require('../my_data_base/my_users').users;
//----------------------------------------------------

// Export the control
module.exports = {
  ctr_users : function(req,res, next){

  /* Get the guest */
  var guest = {
      "email" : req.body.display_email,
      "mdp" : req.body.password
    };

  /* is the guest in the database ?
  * if existe ---> return true & the user itself
  * else ---> return false
  */
  if (guest.email in users && (guest.mdp == users[guest.email]['mdp'])){
          return{
            'v':true,
            'email':guest.email
            }
        }
        else
          return{
            'v':false
            }
  }
};
//-------------------------------------------------------------------------
