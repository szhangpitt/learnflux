var React = require('react');
var SearchActions = require('../actions/SearchActions');
var SearchStore = require('../stores/SearchStore');
var FacetInput = require('./FacetInput');

function getFacetSearchState () {
    return SearchStore.getSearch();
}

var FacetSearch = React.createClass({
    getInitialState: function () {
        return getFacetSearchState();
    },

    handleMarketSectorChange: function (e) {
        selectedMarketSectorName = e.target.value;
        this.setState({'selectedMarketSectorName': selectedMarketSectorName});
    },

    _onChange: function () {
        this.setState(getFacetSearchState());
    },

    render: function () {
        var self = this;
        var marketSectorOptions = this.props.searchOptions.map(function (ms) {
            return ms.name;
        })


        var marketSectorFacetInput = (
            <select
                name="marketSector"
                dataField="marketSector"
                onChange={self.handleMarketSectorChange}
                defaultValue=""
                className="form-control">
                {
                    [<option key={-1} value="">{'-- Please select --'}</option>].concat(
                        self.props.searchOptions.map(function (ms, index) {
                            return (
                                <option key={index} value={ms.name}>{ms.name}</option>
                            );
                        }))
                }
            </select>
        );

        var selectedMarketSectorName = self.state.selectedMarketSectorName;

        var marketSector = self.props.searchOptions.filter(function (ms) {
            return ms.name === selectedMarketSectorName;
        });

        var facetsFormGroups;

        if (marketSector.length) {
            facetsFormGroups = marketSector[0].facets.map(function (f, index) {
                return (
                    <FacetInput
                        key={index}
                        dataField={f.dataField}
                        name={f.name}
                        options={f.options} />
                );
            });
        }

        return (
            <div>
                {marketSectorFacetInput}
                {facetsFormGroups}
            </div>
        );
    }
});

module.exports = FacetSearch;