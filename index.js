var connect = require('connect'),
  serveStatic = require('serve-static'),
  path = require('path');

var ngApimock = require('ng-apimock')();

ngApimock.run({src: 'test/mocks', outputDir: '.tmp/some-other-dir'});

var app = connect();
app.use(require('ng-apimock/lib/utils').ngApimockRequest);
app.use('/node_modules', serveStatic(path.join(process.cwd(), 'node_modules')));
app.use('/mocking', serveStatic('.tmp/some-other-dir'));
app.use('/', serveStatic(__dirname+'/dist'));


app.listen(9900);
console.log('server running on port 9900');
