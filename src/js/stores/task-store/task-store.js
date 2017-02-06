var EventEmitter = require('events').EventEmitter,
    AppDispatcher = require('../../dispatchers/updatelist-dispatcher'),
    appConstants = require('../../constants/app-constants')
    _store = require('./store.js');

var listStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    var CHANGE_EVENT = appConstants.CHANGE_EVENT;

    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb) {
    var CHANGE_EVENT = appConstants.CHANGE_EVENT;

    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function() {
    return _store.getStore();
  },
  getLength: function() {
    return _store.getLength();
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action,
      CHANGE_EVENT = appConstants.CHANGE_EVENT;

  switch(action.action){
    case appConstants.ADD_ITEM:
      _store.addItem(action.data);
      listStore.emit(CHANGE_EVENT);

      return;
    case appConstants.REMOVE_ITEM:
      _store.removeItem(action.data);
      listStore.emit(CHANGE_EVENT);
      
      return;
    default:
      return true;
  }
});

module.exports = listStore;
