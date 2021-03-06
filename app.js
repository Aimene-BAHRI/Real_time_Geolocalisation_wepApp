

// Includes
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
//--------------------------------------------


// Server lunch stufs
var http = require('http');
var app = express();
var server = http.createServer(app);
//----------------------------------


// Routers paths
var dashboard = require('./routes/dashboard');
var log = require('./routes/log');
var user = require('./routes/user');
//---------------------------------------------


// Initialise sockets
var socketIO = require('socket.io');
var io_clients = socketIO(server);
//-----------------------------------


// Sockets events handler

/* When any user connect to his page */
io_clients.on("connection",function (client) {
  console.log("Wellcome ");

  /* Call controllers */
  var controller_f = require('./controller/control_socket_f');
  var controller_g = require('./controller/control_socket_g');

  /* When current client send message to a friend */
  client.on('f-chat',function (packet) {

    var ctr_f = controller_f.ctr_socket({
      from :packet.from,
      to: packet.to
    })

    if (ctr_f.v) {
        client.broadcast.emit(ctr_f.target,packet.txt)
    }

  })

  /* When current client send message to a group */
  client.on('g-chat',function (packet) {

    var ctr_g = controller_g.ctr_socket({
      from :packet.from,
      to: packet.to
    })

    if (ctr_g.v) {
        client.broadcast.emit(packet.to,packet.txt);
    }

  })

  /* When current client disconect */
  client.on("disconnect",function () {
    console.log("good by ");
  });

});
//-----------------------------------


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//------------------------------------------------


// Cookies session
app.use( cookieParser() );
app.use ( cookieSession (
  {
    secret : 'todotopsecret'
  }
));
app.use ( bodyParser() );
//---------------------------------


// uncomment after placing your favicon in /public
// ------- app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// Add some data to reqestes and responces
app.use(function(req, res, next){

  /* Create a session if doesnt existe */
  if ( typeof( req.session.user ) == 'undefined') {
            req.session.user = null;
            }

  next();
});
//----------------------------------------------------


// Express stufs
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//------------------------------------------------------


// Routers
app.use('/',dashboard);
app.use('/log',log);
app.use('/user',user);
//--------------------



//---------------------------------<<Errors Handler>>-----------------------------------

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//-----------------------------------------


// Error handler
app.use(function(err, req, res, next) {

  /* set locals, only providing error in development */
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  /* render the error page */
  res.status(err.status || 500);
  res.render('error');
});
//---------------------------------------------------------------------



//------------------------<<Exports>>-----------------------------------------

// Export to the main bin www
module.exports = {
  app : app,
  server : server,
};
//---------------------------
