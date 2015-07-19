var koa = require('koa');
var mount = require('koa-mount');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var api = require('./backend/app');

var app = koa();

app.use(mount(api));

app.use(function *() {
  this.respond = false;
  proxy.web(this.req, this.res, {
    target: 'http://127.0.0.1:8080'
  });
});

app.listen(3000, function() {
  console.log('Dev server running at 3000');
});