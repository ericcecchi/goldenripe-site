
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
            <Link to="/" className="mainnav-logo">Example site</Link>

            <nav className="mainnav-nav">
              <ul className="mainnav-links">
                <li><Link to="/example" className="mainnav-link">Link</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Navbar;
