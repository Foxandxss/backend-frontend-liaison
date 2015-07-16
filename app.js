var koa = require('koa');
var mount = require('koa-mount');
var views = require('koa-views');

var api = require('./backend/app');

var app = koa();

app.use(views(__dirname + '/frontend/public'));

app.use(mount(api));

app.use(function *() {
  // For html5Mode
  var foo = yield this.render('index');
});

app.listen(3000, function() {
  console.log('Dev server running at 3000');
});