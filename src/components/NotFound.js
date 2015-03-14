
var React = require('react');
var Router = require('react-router');

var {Link} = Router;

var NotFound = React.createClass({
  render: function() {
    return (
      <main className="errorpage" >
        <section className="hero">
          <div className="row">
            <div className="col _span-12">
              <div>
                <h1>Far Out</h1>
                <p className="lead">
                  We're not sure how you got here...<br />
                  But you may be lost in cyberspace.
                </p>
                <p>
                  <Link className="button _next _inverse _large" to="/">Take Me Home</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
});

module.exports = NotFound;
