var React = require('react'),
    ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function() {
    var listObj = this.props.list,
        listLength = this.props.listLength,
        listArr = [];
    
    for(var i=0;i<listLength;i++){
      var task = {};

      task.key = i;
      task.index = i;
      task.message = listObj[i];

      listArr.push(task);
    }

    console.log(listArr);
    return(
      <section>
        {listArr.map(item =>
          <ListItem {...item} />
        )}
      </section>
    );
  }
});

module.exports = List;