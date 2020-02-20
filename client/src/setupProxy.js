const proxy = require('http-proxy-middleware');

    module.exports = app => {
      app.use(proxy(['/books', '/users/', '/authors/', '/booksinstances/', '/genres/**'], { target: 'http://localhost:5000/' }))};