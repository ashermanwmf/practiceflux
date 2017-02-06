var AppDispatcher = require('../dispatchers/updatelist-dispatcher'),
    appConstants = require('../constants/app-constants');

var listActions = {
  addTask: function(task) {
    var ADD_ITEM = appConstants.ADD_ITEM;

    AppDispatcher.handleAction({
      action: ADD_ITEM,
      data: task
    });
  },
  removeTask: function(task) {
    var REMOVE_ITEM = appConstants.REMOVE_ITEM;

    AppDispatcher.handleAction({
      action: REMOVE_ITEM,
      data: task
    });
  }
};

module.exports = listActions;
