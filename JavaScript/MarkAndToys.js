// Complete the maximumToys function below.
// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_r=internal-search

function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);
  
  	let budget = k;

    // sort the array and then loop from bottom to top

    // loop over, deduct from the price, once we get <= 0, we have total toys
  	// need a max toys variable
  	// need a budget variable
  	// 20 [1, 2, 3] -> 14
  	// 20 [10, 10] -> 
  	// 20 [25, 50]
  
  	for(let i = 0; i < prices.length; i++) {
      budget -= prices[i];
      
      if (budget < 0) {
        return i;
      }
    }
  
  	return prices.length;
}
