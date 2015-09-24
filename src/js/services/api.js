var q = require('q');
var $ = require('jquery');

module.exports = {
    fetchSearchOptions: function () {
        var def = q.defer();

        $.get('data/searchOptions.json', function (data) {
          def.resolve(data);
        });

        return def.promise;
    },
    fetchResults: function () {
        var def = q.defer();

        $.get('data/results.json', function (data) {
          def.resolve(data);
        });

        return def.promise;
    }
}