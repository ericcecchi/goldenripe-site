
var React = require('react/addons'),
    Router = require('react-router');

var {Link} = Router,
    Icon = require('./Icon');

var Navbar = React.createClass({

  render: function() {
    var cx = React.addons.classSet;
    var navbarClasses = cx({
          'mainnav': true
        });

    return (
      <header className={navbarClasses}>
        <div className="row">
          <div className="col _span-12">
            <nav className="mainnav-nav _right">
              <ul className="mainnav-links">
                <li><a href="//theway.goldenripe.org" className="button _inverse _pill _next">Go to The Way</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Navbar;
