var Store = function() {
  this._store = {};
  this._length = 0;
};

Store.prototype.getStore = function() {
  return this._store;
};

Store.prototype.getLength = function() {
  return this._length;
};

Store.prototype.reorderStore = function() {
  var storeKeys = Object.keys(this._store),
      store = {};
  
  for(var i=0; i<this._length; i++) {
    var oldNum = storeKeys[i],
        newNum = i;

    store[newNum] = this._store[oldNum];  
  }

  this._store = Object.assign({}, store);
};

module.exports = Store;