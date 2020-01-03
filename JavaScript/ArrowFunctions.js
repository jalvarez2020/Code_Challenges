//https://www.hackerrank.com/challenges/js10-arrows/problem

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

/**** METHOD 1 ****/

function modifyArray(nums) {
    let sumArr = []
    for(const idx in nums) {
        if(nums[idx] % 2 === 0) {
            sumArr.push(nums[idx] * 2)
        }

        else {
            sumArr.push(nums[idx] * 3)
        }
    }
    return sumArr
}

/**** METHOD 2 ****/

function modifyArray(nums) {

    const sumArr = nums.map( x => x % 2 === 0 ? x * 2 : x * 3)
    
    return sumArr
}