
var React = require('react'),
    Router = require('react-router'),
    {Route, NotFoundRoute, DefaultRoute} = Router;

var App = require('./components/App'),
    Home = require('./components/Home'),
    ExamplePage = require('./components/ExamplePage'),
    NotFound = require('./components/NotFound');

module.exports = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="/example" handler={ExamplePage} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
