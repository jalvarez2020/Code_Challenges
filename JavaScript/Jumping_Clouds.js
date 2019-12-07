//https://www.hackerrank.com/challenges/jumping-on-the-clouds/submissions/code/133116537

function jumpingOnClouds(c) {
    // loop over the clouds, if you are going to land on a thundercloud, then don't
  
    // we are going to loop by 2 first,
  // either a for loop, or a while loop
  
  
  // we need a count variable, and an index variable
  let count = 0;
  let i = 0;
  
  // while i'm not at the end...
  while (true) {
    // if it's a thunderhead or we're going to go past the end of the array, 
    if (i + 2 < c.length && c[i+2] === 0) {
        i += 2;
    } else if (i + 1 < c.length) {
          i += 1;
    } else {
          break;
    }
    count++;
  }
  
  return count;
  
  // we don't want to iterate over everyting in the array
    // if 2 is a thundercloud, then
    
    // we want to TRY by 2 first, but we don't always want to do 2
    
  
  
        
        // then we do 1 instead
    // we're trying to find the shortest path, so we always try the larger number first
    // as we're jumping, increment a jumping count

    // we stop when we hit the end of the array

    // return count
}