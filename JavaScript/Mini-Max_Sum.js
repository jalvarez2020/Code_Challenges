//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr) {
    //Identify min number and Max number in array
    //Sum up array with and without min/max numbers
    //return min sum and max sum
    let currentArr = arr
    currentArr.sort()
    let min = currentArr[0]
    let max = currentArr[arr.length - 1]
    arr.pop()
    arr.shift()
    for(let i = 0; i < arr.length; i++){
        min += arr[i]
        max += arr[i]
    }
    console.log(min, max)
}