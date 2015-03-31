
var React = require('react');
var Router = require('react-router');

var {Link} = Router,
    Icon = require('./Icon');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="globalfooter below-the-fold">
        <div className="row">
          <div className="col _span-12">
            <p className="globalfooter-copyright">&copy; Copyright 2015 GoldenRipe. All&nbsp;Rights&nbsp;Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
