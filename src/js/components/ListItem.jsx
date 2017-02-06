var React = require('react'),
    listActions = require('../actions/list-actions.js');

var ListItem = React.createClass({
  _delete: function() {
    var deleteTask = listActions.removeTask,
        task = this.refs.task.getDOMNode();
        taskAttr = task.attributes,
        taskIndex = taskAttr['data-index'].value;

    deleteTask(taskIndex);
  },
  render: function() {
    return(
      <div ref="task" data-index={this.props.index} className="task-container">
        <div>{this.props.index + 1}</div>
        <div ref="message">
          {this.props.message}
        </div>
        <button onClick={this._delete}>Delete</button>
      </div>
    );
  }
});

module.exports = ListItem;