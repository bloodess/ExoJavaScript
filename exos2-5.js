 // include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(list) {
        var test = _.chain(list)

        .map(function(item){
        	return item = (item + 'chained').toUpperCase();
        })
        .sortBy();
        
        return test;
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;