//https://www.hackerrank.com/challenges/js10-throw/problem



function isPositive(a) {
    try {

        if(a > 0) {
            return "YES"
        }

        else if(a === 0) {
            return "Zero Error"
        }

        else if(a <= -1) {
            return "Negative Error"
        }
    }
    catch {
       
        return `${a} is undefined` 
        
    }

}