
var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes');

var run = function() {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler path={window.location.pathname} />, document.body);
  });
}

document.addEventListener('DOMContentLoaded', run);
