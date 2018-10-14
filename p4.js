// Problem 4 - Largest palindrome product

// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome() {
    var largest = 0;
    for(var i = 999; i > 100; i--) {
        for(var j = 999; j >= i; j--) {
            var result = i*j;
            if(isPalindrome(result) && result > largest) {
                largest = result;
            }
        }
    }
    return largest;
}

function isPalindrome(n) {
    var s = n.toString();
    for(var i = 0 ; i < s.length / 2 ; i++) {
        if(s[i] != s[s.length-1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(largestPalindrome());
