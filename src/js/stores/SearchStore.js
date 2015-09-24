var AppDispatcher = require('../dispatchers/AppDispatcher');
var SearchConstants = require('../constants/SearchConstants');
var EventEmitter = require('events').EventEmitter;

var merge = Object.assign;

var searchObj = {simpleSearchString: '', searchOptions: []};

function setSearch (searchData) {
    searchObj = searchData;
}

function setSimpleSearch (searchString) {
    searchObj.simpleSearchString = searchString;
}

function setSearchFacets (facets) {
    searchObj.facets = facets;
}

function setSearchOptions (searchOptions) {
    searchObj.searchOptions = searchOptions;
}

var SearchStore = merge(EventEmitter.prototype, {
    getSearch: function () {
        return searchObj;
    },

    addActionHandler: function (callback) {
        this.on('change', callback);
    },

    removeActionHandler: function (callback) {
        this.removeEventListener('change', callback);
    },

    emitChange: function () {
        this.emit('change');
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case SearchConstants.SEARCH_OPTIONS_RECEIVED:
            setSearchOptions(action.data);
            break;
        case SearchConstants.SIMPLE_SEARCH_UPDATED:
            setSimpleSearch(action.data);
            break;
        case SearchConstants.SEARCH_FORM_SUBMIT:
            break;
        default:
            return true;
    }

    SearchStore.emitChange();
});


module.exports = SearchStore;