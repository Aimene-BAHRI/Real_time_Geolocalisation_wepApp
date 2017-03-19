// include my users database
var users = require('../my_data_base/my_users');

module.exports = {

  ctr_users : function(req,res, next){

  // get the guest
  var guest = {
      "id" : req.body.idd,
      "mdp" : req.body.mdpp
    };

  /* is the guest in the database ?
  * if existe ---> go to home page
  * else go back to the login page
  */
  if (guest.id in users && (guest.mdp == users[guest.id]['mdp'])){
            /*res.render('home',{
              'id':guest.id,
              'profile':users[guest.id]
            });*/

          return{
            'v':true,
            'user':{
              'id':guest.id,
              'profile':users[guest.id]
            }
          }
        }
          else
            /*res.render('log');*/
            return{
              'v':false
            }

  }
};
