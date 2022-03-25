'use strict';

class SubSequence{
    constructor(){}
    longestSubsequence(firstWord, secondWord){
        if(typeof firstWord !== "string" || typeof secondWord !== "string" ){
            return "this is not a string";
        }else{
            let shorterWord = firstWord.length < secondWord.length ? firstWord : secondWord;
            let LongestWord = firstWord.length < secondWord.length ? secondWord : firstWord;
            let i=shorterWord.length;
            while (i > 0) {
                let shift = shorterWord.length - i;
                for(let j=0; j <= shift; j++){
                    // console.log("check", shorterWord.substring(j, (shorterWord.length - shift+j)), "j is: ", j, "shift is: ", shift);
                    if(LongestWord.includes(shorterWord.substring(j, (shorterWord.length - shift + j))) ){
                        return shorterWord.substring(j, (shorterWord.length - shift + j));
                    }
                }
                i--;
            };
            return "sorry, nothing found"
        }
        
    }
}
const subs = new SubSequence();
console.log(subs.longestSubsequence("karol", "rolki"));
console.log(subs.longestSubsequence("dss", "bbbbbbbbb"));
console.log(subs.longestSubsequence("anna", "marzanna"));