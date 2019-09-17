
//Takes a string and reverse the string and checks against input string if input string is a palindrome
// returns true
function checkPalindrome(inputString) {
    palindrome = inputString.split('').reverse().join('')
    console.log(palindrome)
    if(palindrome === inputString) {
        console.log("TRUE")
        return true
    }

    else {
        console.log('FALSE')   
        return false
    }
}


str = 'aabaa'

nStr = 'abcd'

checkPalindrome(str)
checkPalindrome(nStr)


