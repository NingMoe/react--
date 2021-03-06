var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use("/admin/public",express.static(path.join(__dirname, 'public')));
app.use("/admin/admin/public",express.static(path.join(__dirname, 'public')));
app.use("/admin/public",express.static(path.join(__dirname, 'public')));

// admin图片
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.all('*',function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

//     if (req.method == 'OPTIONS') {
//         res.send(200); //让options请求快速返回/
//     }
//     else {
//         next();
//     }
// });

var index = require('./routes/index');
var admin = require('./routes/admin');
var api = require('./routes/api');
app.use('/', index);
app.use('/admin',admin);
app.use('/api', api);
app.listen(8000)


module.exports = app;
