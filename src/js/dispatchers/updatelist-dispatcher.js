var flux = require('flux'),
    Dispatcher = flux.Dispatcher,
    AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
  var VIEW_ACTION = 'VIEW_ACTION';

  this.dispatch({
    src: VIEW_ACTION,
    action: action
  });
};

module.exports = AppDispatcher;
