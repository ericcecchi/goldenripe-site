
var React = require('react');

var icons = require('raw!../styles/icons/icons.svg');

var Icons = React.createClass({
  render: function() {
    return (
      <div className='icons' dangerouslySetInnerHTML={{__html: icons}} />
    );
  }
});

module.exports = Icons;
