  // include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(list) {
    	var list;
        list =  _.sortBy(list, 'quantity');
        return list.reverse();
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
