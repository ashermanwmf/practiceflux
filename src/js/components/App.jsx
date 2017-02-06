var React = require('react'),
    ListInput = require('./ListInput.jsx'),
    List = require('./List.jsx'),
    listStore = require('../stores/task-store/task-store'),
    listActions = require('../actions/list-actions');

var App = React.createClass({
  getInitialState: function(){
    return {
      list: listStore.getList(),
      listLength: listStore.getLength()
    };
  },

  componentDidMount: function() {
    listStore.addChangeListener(this._onChange);
  },

  componentWillMount: function() {
    listStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      list: listStore.getList(),
      listLength: listStore.getLength()
    });
  },

  _onSubmit: function (node) {
    var inputNode = node.firstChild,
        nodeName = inputNode.nodeName,
        INPUT = 'INPUT';

    if(nodeName === INPUT){
      var inputValue = inputNode.value;
      var addTask = listActions.addTask;

      addTask(inputValue);
    }
  },

  render: function() {
    var listInputProps = {
        onSubmit: this._onSubmit
    };
    var listProps = {
      list: this.state.list,
      listLength: this.state.listLength
    }
    return(
      <div>
        <header>
          <h1>To do list</h1>
        </header>
          <ListInput {...listInputProps} />
          <List {...listProps} />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
