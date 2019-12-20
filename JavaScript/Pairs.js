//https://www.hackerrank.com/challenges/pairs/problem


function pairs(k, arr) {
	// change the array to a set/hashmap so we can do the lookups easier
    // O(n)
  let map = {}; // for of -> for (let value of array)
  for(let a of arr) {
    map[a] = true;
  }
  
  let counter = 0;
  for(let i = 0; i< arr.length; i++){
    let other = arr[i] - k;
    if(map[other] === true)){
      counter++;
    }
    
  }
	return counter
    // O(1)
    // loop through each number
    // how do we determine what number we're looking for?
    // arr[i] - k = other number
    // if other number exists, we know we have a pair, if not, then we don't
    // O(n)
    // O(2n) -> O(n)

    // space complexity
    // O(n)
}