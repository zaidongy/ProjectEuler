// Problem 1 - Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// 3 6 9 12 15 18 
// 5 10 15 20
// 15 30 45 60 

var _ = require('lodash');

var threes = _.range(3, 1000, 3);
var fives = _.range(5,1000, 5);

function intersect(a,b) {
    var result = [];
    for(var i of a) {
        if(b.includes(i))
            result.push(i);
    }
    return result;
}

var sum = _.sum(threes) + _.sum(fives) - _.sum(intersect(threes, fives));

console.log(sum);