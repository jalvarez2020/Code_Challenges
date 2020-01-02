//https://www.hackerrank.com/challenges/js10-class/problem


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(arr) {
        this.lengths = arr
    }
}

Polygon.prototype.perimeter = function(arr) {
    let sum = this.lengths.reduce((acc, cur) => acc + cur)
    return sum
}