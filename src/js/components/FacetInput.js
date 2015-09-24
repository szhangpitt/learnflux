var React = require('react');

var FacetInput = React.createClass({

    render: function () {
        var inputControl;
        var self = this;

        if (self.props.options && Array.isArray(self.props.options) && self.props.options.length) {
            inputControl = (
                <select
                    className="form-control"
                    name={self.props.dataField}>
                {self.props.options.map(function (opt, index) {
                    return <option
                        key={index}
                        value={opt.value}>
                        {opt.name}
                    </option>;
                })}
                </select>
            );
        } else {
            inputControl = <input className="form-control" type="text" name={self.props.dataField} />;
        }

        return (
            <fieldset className="form-group">
                <label>{self.props.name}</label>
                {inputControl}
            </fieldset>
        );
    }
});


module.exports = FacetInput;
