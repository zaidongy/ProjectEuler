// Problem 3 - Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

var n = 600851475143;

function findLPF(n) {
    for(var i = 2; i*i < n; i++) {
        if(n % i == 0) {
            var result = n / i;  
            console.log(`${n} / ${i} = ${result}`);
            return findLPF(result);
        }
    }
    console.log(`${n} is prime`); 
    return n;
}

findLPF(n);