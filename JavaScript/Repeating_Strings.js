//https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


function repeatedString(s, n) {
    let numOfFullString = Math.floor(n/s.length)
    let remainder = n % s.length
    let aCountInString = getACount(s)
    let aRemainderCount = getARemainderCount(s, remainder)
    let totalA = (numOfFullString * aCountInString)+ aRemainderCount
    return totalA
   }
   function getACount(s){
       let count = 0
       for (let i =0; i< s.length; i++){
           if (s[i] === 'a'){
               count++
           }
       }
       return count 
   }
   function getARemainderCount(s, remainder){
       let count = 0
       for (let i =0; i < remainder; i++){
           if (s[i] === 'a'){
               count++
           }
       }
       return count;
   }
   