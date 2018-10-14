// Problem 5 - Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function lcm(a,b) {
    a *= (b / gcf(a, b));
    return a;
}

function gcf(a,b) {
    while (b > 0)
    {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

var _ = require('lodash');
var set = _.range(1,21,1);
function findLCM(set) {
    var result = set[0];
    for(var i = 1; i < set.length; i++) 
        result = lcm(result, set[i]);
    return result;
}

console.log(findLCM(set));