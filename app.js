// includes
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser');

// routers paths
var home = require('./routes/home');
var web = require('./routes/web');
var log = require('./routes/log');
var user = require('./routes/user');

// server lunsh stufs
var http = require('http');
var app = express();
var server = http.createServer(app);

// initialise sockets
var socketIO = require('socket.io');
var io = socketIO(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// cookies
app .use( cookieParser() )
    .use ( cookieSession ({
        secret : 'todotopsecret'

    }) )
    .use ( bodyParser() )

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// make io accessible to routers
app.use(function(req, res, next){
  res.io = io;
  if ( typeof( req.session.user ) == 'undefined') {
            req.session.user = null;
            }

  next();
});

//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var clients =[]



// routes
app.use('/',home);
app.use('/web',web);
app.use('/log',log);
app.use('/user',user);








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// export to the main bin www
module.exports = {
  app : app,
  server : server,
  clients : clients
};
