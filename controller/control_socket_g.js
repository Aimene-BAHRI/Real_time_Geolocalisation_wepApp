
// Include my users database
var users = require('../my_data_base/my_users').users;
//----------------------------------------------------

// Export the control
module.exports = {
    ctr_socket : function(exc){

    /* Get the request */
    var  exchange= {
        from : exc.from,
        to : exc.to
      };

    /* is the group in your group list
      */
    if ( users[exchange.from].groups.indexOf(exchange.to)!= -1 ){
            return{
              'v':true,
              }

          }
          else{
          
            return{
              'v':false
              }

            }


  }
}
