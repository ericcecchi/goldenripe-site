
var React = require('react');

var Icon = React.createClass({
  render: function() {
    return (
      <svg className={"icon _" + this.props.name} dangerouslySetInnerHTML={{__html: '<use xlink:href="#'+this.props.name+'"></use>'}}></svg>
    );
  }
});

module.exports = Icon;
