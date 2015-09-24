var React = require('react');
var SearchStore = require('../stores/SearchStore');
var SearchActions = require('../actions/SearchActions');

function getSearchState () {
    return SearchStore.getSearch();
}

var QuickSearch = React.createClass({
    getInitialState: function () {
        return getSearchState();
    },
    componentDidMount: function () {
        SearchStore.addActionHandler(this._onChange);
    },
    componentWillUnmount: function () {
        SearchStore.remoteActionHandler(this._onChange);
    },
    _onChange: function (e) {
        this.setState(getSearchState());
    },
    handleChange: function (e) {
        SearchActions.updateSimpleSearch(e.target.value);
    },
    render: function () {
        return (
            <div className="form-group">
                <label>Quick Search</label>
                <div>Searching: {this.state.simpleSearchString}</div>
                <input className="form-control" type="text" onChange={this.handleChange} />
            </div>
        );
    }
});

module.exports = QuickSearch;