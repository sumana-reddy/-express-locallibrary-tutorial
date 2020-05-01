Skip to content
Why GitHub? 
Team
Enterprise
Explore 
Marketplace
Pricing 
Search

Sign in
Sign up
LinGill21
/
express-locallibrary-tutorial-MVCDemo
102
 Code
 Issues 0
 Pull requests 0 Actions
 Projects 0
 Security 0
 Insights
Join GitHub today
GitHub is home to over 40 million developers working together to host and review code, manage projects, and build software together.

express-locallibrary-tutorial-MVCDemo/app.js /
@LinGill21 LinGill21 preped fro heroku
f94206e 3 days ago
58 lines (48 sloc)  1.68 KB
  
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require('./routes/catalog'); 
const compression = require('compression');
const dotenv = require('dotenv')
const helmet = require('helmet');

//setting up database
const app = express();
app.use(helmet());
dotenv.config({ path: '.env' })
const mongoose = require('mongoose');

const dev_db_url = process.env.ATLAS_URI
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
