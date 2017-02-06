var React = require('react');

var ListInput = React.createClass({
  submitInput: function(node) {
    this.props.onSubmit.call(null, node);
    this.clearInput();
  },
  clearInput: function() {
    var messageInput = this.refs.message.getDOMNode();
    messageInput.value = '';
  },
  render: function() {
    return (
      <section>
        <input type="text" ref="message" />
        <button onClick={() => this.submitInput.call(this, this.getDOMNode())}>Submit</button>
      </section>
    );
  }
});

module.exports = ListInput;