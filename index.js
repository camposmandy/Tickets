var express = require('express'),
  serveStatic = require('serve-static'),
  path = require('path');

var ngApimock = require('ng-apimock')();

ngApimock.run({src: 'test/mocks', outputDir: '.tmp/some-other-dir'});

var app = express();
app.use(require('ng-apimock/lib/utils').ngApimockRequest);
app.use('/node_modules', express.static(path.join(process.cwd(), 'node_modules')));
app.use('/mocking', express.static('.tmp/some-other-dir'));
app.use('/app', express.static(__dirname+'/dist/app'));
app.use('/resources', express.static(__dirname+'/dist/resources'));
app.use('/scripts', express.static(__dirname+'/dist/scripts'));

app.all('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});


app.listen(9900);
console.log('server running on port 9900');
