
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
              <a href="#connect" className="button _large">Contact us now</a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="row">
            <div className="col _span-12">
              <h2>Get to know us.</h2>
              <p className="lead">GoldenRipe builds mobile and web apps for people to exchange questions, answers, and comments about faith, life, and afterlife. Through this exchange, we are forming a multi-lingual, community-driven knowledge base and sparking conversations among believers and non-believers of all creeds.</p>
            </div>
          </div>

          <div className="row">
            <div className="bio col _span-4">
              <div className="avatar _dan" title="Dan Suiter"></div>
              <h3>Dan Suiter</h3>
              <p>Technology and discipleship are my focal points. I started discipling  in the 1980s and shifted to influencing youth and students in the 1990s and 2000s. It has now shifted back to intentional discipling in several relationships with both believers and non-believers. On the technology side, I am a Software Systems Engineer who has been a technical lead on mid-sized (40+ million USD) new products in telecommunications, with 16 years in software development and 14 years in hands-on system engineering. My career profile <a target="_blank" href="http://linkedin.com/in/danielsuiter">is available on LinkedIn</a>.</p>
            </div>

            <div className="bio col _span-4">
              <div className="avatar _george" title="George Miler"></div>
              <h3>George Miler</h3>
              <p>As a software engineer for over twenty-five years, I have worked primarily on Unix servers and embedded systems, primarily in the area of telecommunications. I have been involved in apologetics and short term missions for over a decade. Some of my interests include community involvement, travel, backpacking, camping, bicycling, music, and volleyball.</p>
              <p>I’m <a target="_blank" href="https://www.linkedin.com/in/miler">on LinkedIn as well</a>.</p>
            </div>

            <div className="bio col _span-4">
              <div className="avatar _eric" title="Eric Cecchi"></div>
              <h3>Eric Cecchi</h3>
              <p>I like to design things for people. And build things for people. And write things, you know, for people. Incidentally, I don't like people—just useful, beautiful things.</p>
              <p>You can find me nestled in one of the hidden corners of the globe coding cool websites and apps. (Yes, for people. Things aren't useful unless someone is using them.)</p>
              <p>And yes, <a target="_blank" href="https://www.linkedin.com/in/ericcecchi">I'm on LinkedIn, too</a>. Kinda.</p>
            </div>
          </div>
        </section>

        <section className="section _dark">
          <div className="row">
            <div className="col _span-12">
              <h2>A brief history of GoldenRipe.</h2>
              <p className="lead">GoldenRipe is a non-profit organization formed in 2012 by George, Dan, and Eric. We built our first app, “The Way,” to help Christians use mobile technology to engage in tough conversations with people of other religions.</p>

              <h3>Phase 1: Identifying the User</h3>
              <p>The Way is a mobile and web app that addresses frequently asked question in short answer format with references to the Bible and Qur’an. The extensive content was written by a Christian missionary living in Muslim culture for 20 years. Unexpectedly, the app was downloaded by more Muslims than Christians based on Google Play report of other apps normally downloaded by those who downloaded “The Way”. Total downloads of The Way peaked at 1,600 in 2013, which is an impressive 20% retention of the total number of downloads.</p>

              <h3>Phase 2: Adapting to the User Community</h3>
              <p><strong>We’re launching into 2015 with a new mobile and web app—the HeartTouch project.</strong> Now in development, HeartTouch will bring believers and non-believers into dialogue through a multi-lingual, community-driven question and answer forum. The initial content will focus dialogue toward life and afterlife topics such as peace, worship, love, holiness, the source of sin, sacrifice, assurance, and more.</p>
            </div>
          </div>
        </section>

        <section id="connect" className="section">
          <div className="row">
            <div className="col _span-12">
              <h2>Let’s work together.</h2>

              <p className="lead">We’re looking for passionate people to partner with us and bring the HeartTouch project—and the people who use it—to new life.</p>

              <p><strong>If you’re interested in:</strong></p>
              <ul>
                <li>Engaging believers and non-believers with a dynamic experience</li>
                <li>Touching the heart of non-believers regarding life and afterlife</li>
                <li>Freeing non-believers from misconceptions that hold them in darkness</li>
                <li>Providing opportunity for seekers to connect with disciplers</li>
              </ul>

              <p><strong>We would love to partner with you</strong> in content creation, language translation, application development and/or engaging non-believers. </p>

              <p>Please email us at <a href="mailto:together@goldenripe.org">together@goldenripe.org</a> to talk about the connection we can explore with each other. The connection may be as simple as you providing new questions and answers or translations within the HeartTouch community network. Or, you may feel called to a more involved connection, such as introducing individual seekers to disciplers or follow-up persons who speak their language or are connected with location or region.</p>
            </div>
          </div>
        </section>

        <section className="section _teal">
          <div className="row">
            <div className="col _span-12">
              <h2>Help us help you.</h2>
              <p className="lead">Your words of wisdom mean a lot to us. Email <a href="mailto:ideas@goldenripe.org">ideas@goldenripe.org</a> to let us know what potential features of our app would best meet the needs of your ministry. We also invite you to fill out the survey below, which will weigh heavily on our feature roadmap for the HeartTouch project.</p>
              <p><button className="button _inverse _large" disabled>Feature survey coming soon</button></p>
            </div>
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Together;
