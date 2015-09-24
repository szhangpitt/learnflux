var React = require('react');
// components
var CustomSearchForm = require('./CustomSearchForm');
var SearchResults = require('./SearchResults');
// actions
var SearchActions = require('../actions/SearchActions');
// store
var ResultsStore = require('../stores/ResultsStore');
var SearchStore = require('../stores/SearchStore');
// others
var api = require('../services/api');

var data = {
    columns: [{name: 'name', visible: 'true'}, {name: 'age', visible: 'true'}, {name: 'sex', visible: 'true'}],
};

SearchActions.loadSearchOptions();
SearchActions.loadResults();

function getAppState () {
    return {
        results: ResultsStore.getResults() || [],
        search:  SearchStore.getSearch() || []
    }
}

var App = React.createClass({
    getInitialState: function () {
        return getAppState()
    },

    componentDidMount: function () {
        ResultsStore.addChangeHandler(this._onChange);
    },

    componentWillUnmount: function () {
        ResultsStore.removeChangeHandler(this._onChange);
    },

    _onChange: function () {
        this.setState(getAppState());
    },

    render: function () {
        return (<div>
            <h1>My app</h1>
            <CustomSearchForm search={this.state.search} />
            <SearchResults columns={data.columns} results={this.state.results} />
        </div>);
    }
});

module.exports = App;