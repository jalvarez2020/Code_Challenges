//https://www.hackerrank.com/challenges/js10-arrays/problem

function getSecondLargest(nums) {
    // Complete the function
    // Find the second largest num in nums
    // Sort nums, iterate through nums backward until you find the first smaller number
    nums.sort((a, b) => {return a - b})
    let x = nums.length - 1
    let currentNum = nums[nums.length - 1]
    while( x > 0 ) {
        x -= 1
        if(nums[x] < currentNum && nums[x] != currentNum) {
            return nums[x]
        }
    }
}