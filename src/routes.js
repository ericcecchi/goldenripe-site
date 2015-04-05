
var React = require('react'),
    Router = require('react-router'),
    {Route, NotFoundRoute, DefaultRoute} = Router;

var App = require('./components/App'),
    Home = require('./components/Home'),
    Together = require('./components/Together'),
    NotFound = require('./components/NotFound');

module.exports = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="/together" handler={Together} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
