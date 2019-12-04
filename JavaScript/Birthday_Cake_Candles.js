//https://www.hackerrank.com/challenges/birthday-cake-candles/submissions/code/132953698


function birthdayCakeCandles(ar) {
    //find the tallest candles and count them
    //sort the array from smallest to larggest
    //check if the largest has duplicates, if it does count them
    let count = 0
    let currentArr = ar
    currentArr.sort();
    let larCandle = currentArr[ar.length - 1]
    let largest = new Set([larCandle])
    for(let i = 0; i < currentArr.length; i++){
        if( largest.has(currentArr[i]) ){
            count += 1
        }
     
    }

    return count
    


}