var koa = require('koa');
var mount = require('koa-mount');
var koaStatic = require('koa-static');
var router = require('koa-router')();

var api = require('./backend/app');

var app = koa();
app.use(koaStatic(__dirname + '/frontend/public'));

app.use(mount(api));

app.listen(3000, function() {
  console.log('Dev server running at 3000');
});