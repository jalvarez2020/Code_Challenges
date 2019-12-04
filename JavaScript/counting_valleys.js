
//https://www.hackerrank.com/challenges/counting-valleys/problem?h_r=internal-search

function countingValleys(n, s) {
	let counter = 0;
  // track elevation - track where we're at relative to sea level
  let elevation = 0;
  
  // iterate over our string
  	// split the string into an array, then just iterate over the array
  	// just for loop over the string
  for(let i = 0; i < n; i++) {
    let c = s[i];
    let dir = getDirection(c);
    let prevElevation = elevation;
    elevation += dir;
    // 1
  	// keep track of how many valleys he exits
    	// if elevation === 0 && lastEvalation < 0, then we are exiting a valley
    if (prevElevation === -1 && elevation === 0) {
      counter += 1;
    }
  }
  
  return counter;
  // make a counter for how many valleys we enter/exit
  // return the counter
}

// take in a character D or U and return 1 or -1 if it's up or down
function getDirection(c) {
    if (c === "U") {
        return 1
    } else {
        return -1
    }
}

