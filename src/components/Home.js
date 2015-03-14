
var React = require('react'),
    Router = require('react-router'),
    {Link} = Router,
    Icon = require('./Icon');

var Home = React.createClass({
  componentDidMount: function() {
    window.picturefill = require('picturefill');
  },

  render: function() {
    return (
    <main className="home">
        <header className="hero">
          <div className="row">
            <div className="col _span-12">
              <h1>Welcome to my site.</h1>
            </div>
          </div>
        </header>
        <header className="section">
          <div className="row">
            <div className="col _span-12">
              <h2>Everything is awesome.</h2>
            </div>
          </div>
        </header>
      </main>
    );
  }
});

module.exports = Home;
