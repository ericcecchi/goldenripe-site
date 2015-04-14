
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
              <h1><svg xmlns="http://www.w3.org/2000/svg" width="500" height="125" viewBox="0 0 321.1 66.2"><g><path fill="#fff" d="M35.4 46c0 6.8-1.4 12.3-5.4 15.8-3.8 3.3-9.1 4.3-14.3 4.3-4.7 0-9.5-.9-12.7-2.7l2.2-8.4c2.2 1.3 6 2.7 10.2 2.7 5.2 0 9.1-2.7 9.1-9.3v-2.2h-.1c-2.1 2.9-5.5 4.5-9.5 4.5-8.7.1-14.9-6.9-14.9-17 0-11.4 7.3-18.6 16-18.6 4.8 0 7.8 2.1 9.6 5h.1l.4-4.2h9.5c-.1 2.3-.3 5.3-.3 10.5v19.6zm-11-15.8c0-.6-.1-1.4-.2-2-.8-2.9-2.9-4.8-5.9-4.8-4 0-7.2 3.6-7.2 10 0 5.3 2.6 9.4 7.1 9.4 2.9 0 5.1-1.9 5.8-4.4.3-.9.4-2 .4-3v-5.2zM75.6 33.1c0 12.9-9.1 18.8-18.6 18.8-10.3 0-18.2-6.8-18.2-18.1 0-11.4 7.5-18.7 18.9-18.7 10.7-.1 17.9 7.4 17.9 18zm-25.5.4c0 6 2.5 10.6 7.2 10.6 4.3 0 7-4.2 7-10.7 0-5.2-2-10.5-7-10.5-5.2 0-7.2 5.4-7.2 10.6zM79.2 0h10.9v51.1h-10.9v-51.1zM129.9 0v40.6c0 4 .1 8.1.3 10.5h-9.7l-.4-5.1h-.2c-2.2 3.9-6.5 5.9-11 5.9-8.4 0-15-7.1-15-18.1-.2-11.8 7.2-18.8 15.7-18.8 4.4 0 7.7 1.6 9.3 4h.1v-19h10.9zm-10.9 30.8c0-.6 0-1.4-.1-2-.6-2.9-3-5.3-6.4-5.3-5 0-7.6 4.5-7.6 10 0 6 3 9.7 7.5 9.7 3.2 0 5.8-2.2 6.4-5.3.1-.8.2-1.7.2-2.5v-4.6zM143.8 37c.3 4.5 4.8 6.7 9.9 6.7 3.7 0 6.8-.5 9.7-1.5l1.4 7.4c-3.6 1.5-8 2.2-12.7 2.2-12 0-18.8-6.9-18.8-17.9 0-8.9 5.5-18.8 17.8-18.8 11.4 0 15.7 8.9 15.7 17.6 0 1.9-.2 3.5-.4 4.3h-22.6zm12.9-7.5c0-2.7-1.2-7.1-6.2-7.1-4.6 0-6.5 4.2-6.8 7.1h13zM170.5 27.1c0-4.4-.1-8.1-.3-11.2h9.5l.5 4.9h.2c1.4-2.3 5-5.7 10.9-5.7 7.2 0 12.6 4.8 12.6 15.2v20.8h-10.9v-19.5c0-4.5-1.6-7.6-5.5-7.6-3 0-4.8 2.1-5.6 4.1-.3.7-.4 1.7-.4 2.7v20.3h-10.9v-24z"/><path fill="#fff" d="M208.3 27.5c0-5.2-.1-8.6-.3-11.6h9.4l.4 6.5h.3c1.8-5.2 6-7.3 9.5-7.3 1 0 1.5.1 2.3.2v10.3c-.9-.1-1.7-.3-3-.3-4 0-6.8 2.2-7.5 5.5-.1.7-.2 1.6-.2 2.4v17.9h-10.9v-23.6zM233.3 51.1v-35.2h10.9v35.2h-10.9zM248.9 27.7c0-4.6-.1-8.5-.3-11.8h9.5l.5 4.9h.1c2.6-3.7 6.6-5.7 11.7-5.7 7.7 0 14.6 6.7 14.6 17.9 0 12.8-8.1 18.9-16 18.9-4.2 0-7.6-1.7-9.1-4h-.1v17.5h-10.9v-37.7zm10.9 8.3c0 .9.1 1.6.2 2.3.7 3 3.2 5.2 6.4 5.2 4.8 0 7.6-4 7.6-9.9 0-5.6-2.5-9.9-7.4-9.9-3.1 0-5.8 2.3-6.6 5.5-.1.6-.2 1.3-.2 1.9v4.9zM298.1 37c.3 4.5 4.8 6.7 9.9 6.7 3.7 0 6.8-.5 9.7-1.5l1.4 7.4c-3.6 1.5-8 2.2-12.7 2.2-12 0-18.8-6.9-18.8-17.9 0-8.9 5.5-18.8 17.8-18.8 11.4 0 15.7 8.9 15.7 17.6 0 1.9-.2 3.5-.4 4.3h-22.6zm12.9-7.5c0-2.7-1.2-7.1-6.2-7.1-4.6 0-6.5 4.2-6.8 7.1h13zM251.7 1.2c-16.9-3-17 10.2-17.1 10.6.1 0 11.5 5.9 17.1-10.6z"/></g></svg></h1>
              <h3 className="_large">Sowing seeds via technology.<br/>Connecting people to new life.</h3>
              <h3 className="bounce"><div className="arrow"></div></h3>
            </div>
          </div>
        </header>

        <section className="section _centered">
          <div className="row">
            <div className="col _span-12">
              <h2>Touch the Heart. Free the Mind.</h2>

              <p className="lead">GoldenRipe builds mobile and web apps for people to exchange questions, answers, and comments about faith, life, and afterlife. Through this exchange, we are forming a multi-lingual, community-driven knowledge base and sparking conversations among believers and non-believers of all creeds.</p>
            </div>
          </div>
        </section>

        <section className="section _dark _centered">
          <div className="row">
            <div className="col _span-12">
              <h2>A New Start.</h2>

              <p className="lead"><strong>We’re launching into 2015 with a new mobile and web app—the HeartTouch project.</strong> Now in development, HeartTouch will bring believers and non-believers into dialogue through a multi-lingual, community-driven question and answer forum. The initial content will focus dialogue toward life and afterlife topics such as peace, worship, love, holiness, the source of sin, sacrifice, assurance, and more.</p>
            </div>
          </div>
        </section>

        <section className="section _centered">
          <div className="row">
            <div className="col _span-12">
              <h2>Core Features</h2>
              <p className="lead">The HeartTouch experience will be available as mobile and web apps on all major platforms and devices—smartphones, tablets, and personal computers.</p>
            </div>
          </div>

          <div className="row">
            <div className="col _span-6">
              <h3>Community-driven</h3>
              <p>Users provide questions that engages answer and comment dialogues with each other.</p>
            </div>

            <div className="col _span-6">
              <h3>Deep discussions</h3>
              <p>Key users provide questions and answers to influence community dialogue toward life and afterlife.</p>
            </div>
          </div>

          <div className="row">
            <div className="col _span-6">
              <h3>Any language</h3>
              <p>Integrated translation support to and from any language for all questions and Accepted Answers.</p>
            </div>

            <div className="col _span-6">
              <h3>New relationships</h3>
              <p>Opportunities for seekers to connect with disciplers and keep the dialogue going.</p>
            </div>
          </div>
        </section>

        <section className="section _gray _centered">
          <div className="row">
            <div className="col _span-12">
              <h2>We’re working on it.</h2>
              <p className="lead _large">HeartTouch is not yet available, but it will be soon. Keep checking back, or click the button below to be notified when we launch.</p>
              <p><a href="http://eepurl.com/bjQQYj" className="button _large">Get notified</a></p>
            </div>
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Home;
