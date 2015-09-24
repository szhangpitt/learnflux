var AppDispatcher = require('../dispatchers/AppDispatcher');
var SearchConstants = require('../constants/SearchConstants');
var EventEmitter = require('events').EventEmitter;

var merge = Object.assign;

var results;

function setResults (data) {
    if (Array.isArray(data)) {
        results = data;
    }
}


var ResultsStore = merge(EventEmitter.prototype, {
    getResults: function () {
        return results;
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeHandler: function (callback) {
        this.on('change', callback);
    },

    removeChangeHandler: function (callback) {
        this.removeListener('change', callback);
    }
});


AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch(action.actionType) {
        case SearchConstants.LOAD_RESULTS:
            setResults(action.data);
            break;
        default:
            return true;
    }

    ResultsStore.emitChange();

    return true;
});

module.exports = ResultsStore;
