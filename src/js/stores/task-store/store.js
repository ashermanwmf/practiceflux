var Store = require('../store-temp');

var _store = new Store();

_store.addItem = function(task) {
  var length = this.getLength();

  this._store[length] = task;
  this._length++;    
};

_store.removeItem = function(index) {
  delete this._store[index];

  if(this._length !== 0){
    this._length--;
  }

  if(index < this._length){
    this.reorderStore();
  }
};

module.exports = _store;