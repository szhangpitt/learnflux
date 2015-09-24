var React = require('react');
var CustomSearchForm = require('./CustomSearchForm');
var SearchResults = require('./SearchResults');

var data = {
    columns: [{name: 'name', visible: 'true'}, {name: 'age', visible: 'true'}, {name: 'sex', visible: 'true'}],

    results: [
        {name: 'Shaopeng', age: 29, sex: 'M'},
        {name: 'Jingjing', age: 28, sex: 'F'}
    ]
};

var App = React.createClass({
    render: function () {
        return (<div>
            <h1>My app</h1>
            <CustomSearchForm />
            <SearchResults columns={data.columns} results={data.results} />
        </div>);
    }
});

module.exports = App;