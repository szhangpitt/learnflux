var React = require('react');
var QuickSearch = require('./QuickSearch');
var FacetSearch = require('./FacetSearch.js');
var SearchActions = require('../actions/SearchActions');

var CustomSearchForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        SearchActions.submitQuickSearchForm();
    },
    render: function () {
       return (<form onSubmit={this.handleSubmit}>
               <QuickSearch />
               <FacetSearch searchOptions={this.props.search.searchOptions} />
               <button className="btn btn-primary" type="submit">Search</button>
               </form>);
    }
})

module.exports = CustomSearchForm