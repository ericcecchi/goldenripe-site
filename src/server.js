
var argv = require('yargs')
      .default('env', 'dev')
      .default('port', process.env.PORT || '1984')
      .default('loglevel', 'info')
      .argv,
    compression = require('compression'),
    express = require('express'),
    fs = require('fs'),
    Handlebars = require('handlebars'),
    objectAssign = require('object-assign'),
    path = require('path'),
    React = require('react'),
    Router = require('react-router'),
    routes = require('./routes'),
    π = require('./constants'),

    winston = require('winston'),
    logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({
                level: argv.loglevel,
                timestamp: true,
                colorize: true
            })
        ]
    });

var BUILD_PATH = path.join('build', argv.env);

var app = express(),
    template,
    data;

fs.readFile('./src/index.html', function (err, contents) {
  if (err) {
    console.log(err);
  }
  template = Handlebars.compile(String(contents));
});

fs.readFile(path.join('.', BUILD_PATH, 'rev-manifest.json'), function(err, contents) {
  if (err) {
    console.log(err);
  }
  data = JSON.parse(contents);
});

app.use(compression());
app.use(express.static('./' + BUILD_PATH, {
  index: false,
  setHeaders: function (res, path, stat) {
    res.set('Cache-Control', 'no-transform,public,max-age=86400,s-maxage= 31536000');
    res.set('Vary', 'Accept-Encoding');
    res.set('Expires', 'Thu, 31 Dec 3030 00:00:00 GMT');
  }
})); // Disable serving index.html
app.get('/favicon.ico', function(req, res) { res.send('') });

app.use(function(req, res) {
  logger.info('Received request: %s', req.path);
  Router.run(routes, req.path, function(Handler) {
    var templateData = objectAssign({}, data, {
      title: π.meta[req.path] ? π.meta[req.path].title : π.meta['default'].title,
      description: π.meta[req.path] ? π.meta[req.path].description : π.meta['default'].description,
      fontCDN: π.fontCDN,
      content: React.renderToString(<Handler path={req.path} />)
    });
    logger.info('Sending Response: %s', req.path);
    res.send(template(templateData));
  });
});

logger.info("listening..." + argv.port);
app.listen(argv.port);
