function countWords(inputWords) {

       var result = inputWords.reduce(function(countMap, word) {
           
           countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
           return countMap
         
         }, {}) // second argument to reduce initialises countMap to {}

        return result;
   }

   module.exports = countWords