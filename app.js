var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var templater = require('swig');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();



// view engine setup
app.engine('html', templater.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('view cache', false);
templater.setDefaults({ cache: false });

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


var routes = require('./routes/index');
var users = require('./routes/users');
var songs = require('./routes/songs');
app.use('/', routes);
app.use('/users', users);
app.use('/songs', songs);




/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(err)
    console.log(err.stack)
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log(err)
    console.log(err.stack)
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development')?err:{}
    });
});


module.exports = app;
