
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

    /* is the recipiant in your friend list
    * && is he allowing uto
    *
    */
    if ( exchange.to in users &&
          ( users[exchange.to].friends.ids.indexOf(exchange.from)!= -1 &&
                users[exchange.to].friends.allows[ users[exchange.to].friends.ids.indexOf(exchange.from) ] == true   ) ){

            return{
              'v':true,
              'target': users[exchange.to].id+"-"+users[exchange.from].id
              }

          }
          else{
            console.log("no")
            return{
              'v':false
              }

            }


  }
}
