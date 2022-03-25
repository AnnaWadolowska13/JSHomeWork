'use strict';

class Palindrome{
    constructor() {}
    longestPalindrome(text){
        if(typeof text !== "string"){
            return "this is not a string";
        }else{
            let i=text.length;
            while (i > 1) {
                let shift = text.length - i;
                for(let j=0; j <= shift; j++){
                    // console.log("check", text.substring(j, (text.length - shift+j)), "j is: ", j, "shift is: ", shift);
                    if(this.isPalindrome(text.substring(j, (text.length - shift + j)))){
                        return text.substring(j, (text.length - shift + j));
                    }
                }
                i--;
            };
            return "your's palindrome is only one letter.. so choose one letter from your text :" + text;
        }
    }
    isPalindrome(stringToCheck){
        if(stringToCheck === stringToCheck.split("").reverse().join("")) return true;
        else return false;
    }
}

const palindrome = new Palindrome();

console.log(palindrome.longestPalindrome("ab"));
console.log(palindrome.longestPalindrome("a"));
console.log(palindrome.longestPalindrome("anna"));
console.log(palindrome.longestPalindrome("plyniekajakowkilka"));
console.log(palindrome.longestPalindrome("kajak"));
console.log(palindrome.longestPalindrome("abracadabraa"));


