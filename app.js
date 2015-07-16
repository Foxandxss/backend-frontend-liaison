var koa = require('koa');
var mount = require('koa-mount');

var api = require('./backend/app');

var app = koa();

app.use(mount(api));

app.listen(3000, function() {
  console.log('Dev server running at 3000');
});