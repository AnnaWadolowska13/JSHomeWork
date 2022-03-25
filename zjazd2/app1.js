'use strict';

class Translator{
    constructor( translateMethod ){
        this.translateMethod = translateMethod;
    }
    translate(textToTranslate){
        return this.translateMethod(textToTranslate);
    }
}

class TranslateEngine{
    constructor(dictionary) {
        this.morseEnglishAlphabet = dictionary;
        this.englishMorseAlphabet = {};
        for (const props in this.morseEnglishAlphabet) {
            this.englishMorseAlphabet[this.morseEnglishAlphabet[props]] = props;
        }
    }
    englishToMorse = (text) => {
        if(typeof text !== "string"){
            return "this is not string"
        }else{
            let messageConverted = [];
            let words = text.split(" ");
            for(let i = 0; i < words.length; i++){
                let letters = words[i].split("");
                for(let j = 0 ; j < letters.length; j++){
                    if(typeof this.englishMorseAlphabet[letters[j]] !== "undefined"){
                        messageConverted.push(...this.englishMorseAlphabet[letters[j]].split("").join(" "));
                    }
                    else{
                        return "this is not a english alphabet";
                    }
                    messageConverted.push("   ");
                }
                messageConverted.push("       ");
            }
            return messageConverted.join("");
        }
    }
    morseToEnglish = (text) => {
        // text1 = text;
        if(typeof text !== "string"){
            return "this is not string"
        }
        else{
            let messageConverted = [];
            let words = text.split("       ");
            // console.log("words", words)
            for(let i = 0; i < words.length; i++){
                let letters = words[i].split("   ");
                for(let j = 0 ; j < letters.length; j++){
                    let letter = letters[j].split(" ").join("");
                    // console.log("letter", letter);
                    if(typeof this.morseEnglishAlphabet[letter] !== "undefined"){
                        messageConverted.push(this.morseEnglishAlphabet[letter]);
                    }
                    else if(letter !== " " && letter !== ""){
                        // console.log("letter is ", letter)
                        return "this is not a morse code";
                    }
                }
                messageConverted.push(" ");
            }
            messageConverted[0] = messageConverted[0].charAt(0).toUpperCase() + messageConverted[0].slice(1);  // upper case first letter of sentense
            return messageConverted.join("");            
        }
    }
}


const dictionaryMorseEnglish =  {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
};

let morseEnglish =  new TranslateEngine(dictionaryMorseEnglish);

const morseToEnglishTranslator = new Translator(morseEnglish.morseToEnglish);
const englishToMorseTranslator = new Translator(morseEnglish.englishToMorse);

// console.log(morseToEnglishTranslator.translate(".-   - . .-")); // a tea
// console.log(morseToEnglishTranslator.translate(".-   - .f .-")); // wrong text
// console.log(morseToEnglishTranslator.translate(123)); // not string

let text = englishToMorseTranslator.translate("ala ma kota i kot ma ale");
console.log("english to morse: ", text)
console.log( "morse to english : ", morseToEnglishTranslator.translate(text));