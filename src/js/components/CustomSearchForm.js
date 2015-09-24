var React = require('react');
var QuickSearch = require('./QuickSearch');

var CustomSearchForm = React.createClass({
    render: function () {
       return <form>
        <QuickSearch />
        <button className="btn btn-primary" type="submit" >Search</button>
        </form>
    }
})

module.exports = CustomSearchForm