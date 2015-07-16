var koa = require('koa');
var router = require('koa-router')();

var app = koa();

router.get('/api/foo', function *() {
  this.body = 'Works!';
});

app.use(router.routes());

module.exports = app;

if (!module.parent) {
  app.listen(4000, function() {
    console.log('Standalone at 4000');
  });
}