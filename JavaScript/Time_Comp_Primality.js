//https://www.hackerrank.com/challenges/ctci-big-o/problem

// A little better than 0(n) since iteration over n is not necessary just the square root of n

function primality(n) {

    if(n === 1) {
        return "Not prime"
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) {
            return "Not prime"
        }
    }

    return "Prime"
}