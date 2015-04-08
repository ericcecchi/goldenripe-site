
var React = require('react'),
    Router = require('react-router');

var {RouteHandler} = Router;

var Navbar = require('./Navbar'),
    Footer = require('./Footer'),
    Icons = require('./Icons');

if (typeof window != 'undefined') {
  window.picturefill = require('picturefill');
};

var App = React.createClass({

  getInitialState: function() {
    var state;
    if (typeof localStorage !== 'undefined' && localStorage.appState) {
      state = JSON.parse(localStorage.appState);
    } else {
        state = {
          test: 'localStorage state on'
      };
    }

    return state;
  },

  componentDidUpdate: function(prevProps, prevState) {
    var state = JSON.parse(JSON.stringify(this.state));
    localStorage.appState = JSON.stringify(state);
  },

  render: function() {
    return (
      <div>
        <Navbar ref="navbar" {...this.state} />

        <RouteHandler {...this.props} {...this.state} />

        <Footer />
        <Icons {...this.state} />
      </div>
    );
  }
});

module.exports = App;
