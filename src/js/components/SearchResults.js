var React = require('react');

var SearchResults = React.createClass({

    render: function () {
        var heads = this.props.columns.map(function (col, index) {
            return (<td key={index}>{col.name}</td>);
        });

        var rows = this.props.results.map(function (row, ri) {

            var tds = Object.keys(row).map(function (td, ti) {
                return (<td key={ti}>{row[td]}</td>);
            });

            return (<tr key={ri}>
                {tds}
            </tr>);
        });

        return (<table className="table">
                    <thead>
                        <tr>{heads}</tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>);
    }
})

module.exports = SearchResults;
