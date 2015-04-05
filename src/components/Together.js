
var React = require('react'),
    Router = require('react-router'),
    {Link} = Router,
    Icon = require('./Icon');

var Together = React.createClass({
  componentDidMount: function() {
    window.picturefill = require('picturefill');
  },

  render: function() {
    return (
    <main className="together">
        <header className="hero">
          <div className="row">
            <div className="col _span-12">
              <h1>Touch the Heart. Free the Mind. Connect People to Jesus.</h1>
            </div>
          </div>
        </header>
        <header className="section">
          <div className="row">
            <div className="col _span-12">
              <h2>Let’s work together.</h2>

              <p className="lead">GoldenRipe builds mobile and web apps for people to exchange questions, answers, and comments about faith, life, and afterlife. Through this exchange, we are forming a multi-lingual, community-driven knowledge base and sparking conversations among believers and non-believers of all creeds.</p>

              <p><strong>If you have a passion for:</strong></p>
              <ul>
                <li>Engaging believers and non-believers with a dynamic experience</li>
                <li>Touching the heart of non-believers regarding life and afterlife</li>
                <li>Freeing non-believers from misconceptions that hold them in darkness</li>
                <li>Providing opportunity for seekers to connect with disciplers</li>
              </ul>

              <p><strong>We would enjoy connecting with you</strong> in content creation, language translation, application development and/or engaging non-believers. </p>

              <p>Please email us at <a href="mailto:together@goldenripe.org">together@goldenripe.org</a> regarding the connection we can explore with each other. The connection may be as simple as you providing new questions and answers or translations within the HeartTouch community network. The connection may be more involved such as integrating disciplers or follow-up persons to individual seekers from with a particular language and location/region. We also invite you to advise what future software features would most meet needs you would like to address within your ministry.</p>
            </div>
          </div>
        </header>
      </main>
    );
  }
});

module.exports = Together;
