const proxy = require('http-proxy-middleware');

    module.exports = function(app) {
      app.use(proxy('/books/**', { target: 'http://localhost:5000' }));
      app.use(proxy('/users/**', { target: 'http://localhost:5000' }));
      app.use(proxy('/authors/**', { target: 'http://localhost:5000' }));
      app.use(proxy('/booksinstances/**', { target: 'http://localhost:5000' }));
      app.use(proxy('/genres/**', { target: 'http://localhost:5000' }));
    };