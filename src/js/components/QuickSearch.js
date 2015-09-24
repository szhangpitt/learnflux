var React = require('react');

var QuickSearch = React.createClass({
    render: function () {
        return (
            <div className="form-group">
                <label>Quick Search</label>
                <input className="form-control" type="text" />
            </div>
        );
    }
});

module.exports = QuickSearch;