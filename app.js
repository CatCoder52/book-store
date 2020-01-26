var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

// Resource
var Resource = require('resourcejs');
var _ = require('lodash');
const swaggerUi = require('swagger-ui-express');

const book = require('./models/book')
const author = require('./models/author')
const instance = require('./models/bookinstance')
const genre = require('./models/genre')

var compression = require('compression');
var helmet = require('helmet');

var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/library';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('open', () => console.info('Database connected!✨'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors('*'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression()); // Compress all routes

//app.use(express.static(path.join(__dirname, 'public')));
// Define all our resources.
var resources = {
	book: Resource(app, '', 'book', book).get().put().post().delete().index(),
	author: Resource(app, '', 'author', author).get().put().post().delete().index(),
	instance: Resource(app, '', 'instance', instance).get().put().post().delete().index(),
	genre: Resource(app, '', 'genre', genre).get().put().post().delete().index(),
};

// Get the Swagger paths and definitions for each resource.
var paths = {};
var definitions = {};
_.each(resources, function(resource) {
  var swagger = resource.swagger();
  paths = _.assign(paths, swagger.paths);
  definitions = _.assign(definitions, swagger.definitions);
});

// Define the specification.
var swaggerDocument = {
  swagger: '2.0',
  info: {
    description: '',
    version: '0.0.1',
    title: '',
    contact: {
      name: 'syed.simanta06@gmail.com'
    },
    license: {
      name: 'MIT',
      url: 'http://opensource.org/licenses/MIT'
    }
  },
  host: 'localhost:5000',
  basePath: '',
  schemes: ['http'],
  definitions: definitions,
  paths: paths
};

// Show the specification at the URL.
app.get('/spec', function(req, res, next) {
	res.json(swaggerDocument);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
  res.send('error');
});

// Deployment setup
if (process.env.NODE_ENV === 'production') {
  
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

module.exports = app;
