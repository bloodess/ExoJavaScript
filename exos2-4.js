 // include the Lo-Dash library
var _ = require("lodash");

var worker = function(list) {

	var col = {'hot':[], 'warm': []}

	_.forEach(list, function(temperatures, key) {

    	var tempHot = _.every(temperatures, function(temperature){
    		return temperature > 19
    	
    	});
    	var tempWarm = _.some(temperatures, function(temperature){
    		return temperature > 19
    	});
    	
    	if(tempHot){
    		col.hot.push(key)
    	}

    	
    	else if (tempWarm) {
    		col.warm.push(key);
    	};
    });


	return col;
    
};

// export the worker function as a nodejs module
module.exports = worker;
