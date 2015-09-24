var AppDispatcher = require('../dispatchers/AppDispatcher');
var SearchConstants = require('../constants/SearchConstants');
var api = require('../services/api');

var SearchActions = {
    loadSearchOptions: function () {
        api.fetchSearchOptions()
            .then(function (searchOptions) {
                AppDispatcher.handleAction({
                    actionType: SearchConstants.SEARCH_OPTIONS_RECEIVED,
                    data: searchOptions
                });
            });
    },
    updateSimpleSearch: function (searchString) {
        AppDispatcher.handleAction({
            actionType: SearchConstants.SIMPLE_SEARCH_UPDATED,
            data: searchString
        });
    },
    submitQuickSearchForm: function () {
        api.fetchResults()
            .then(function (results) {
                AppDispatcher.handleAction({
                    actionType: SearchConstants.LOAD_RESULTS,
                    data: results
                });
            });
    },
    loadResults: function () {
        api.fetchResults()
            .then(function (results) {
                AppDispatcher.handleAction({
                    actionType: SearchConstants.LOAD_RESULTS,
                    data: results
                });
            });
    }
};

module.exports = SearchActions;
