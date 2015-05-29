
var React = require('react/addons'),
    Router = require('react-router');

var Link = Router.Link,
    Icon = require('./Icon');

var Navbar = React.createClass({
  mixins: [Router.State],

  render: function() {
    var cx = React.addons.classSet;
    var navbarClasses = cx({
      'mainnav': true
    });
    var navbarStyles = {
      homeLink: {
        display: this.isActive('/') ? 'none' : 'block'
      }
    }

    return (
      <header className={navbarClasses}>
        <div className="row">
          <div className="col _span-12">
            <nav className="mainnav-nav _left">
              <ul className="mainnav-links" style={navbarStyles.homeLink}>
                <li><a href="/" className="button _inverse _pill _previous">GoldenRipe Home</a></li>
              </ul>
            </nav>

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
