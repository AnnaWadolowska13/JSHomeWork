class Translator{
    constructor( translateMethod ){
        this.translateMethod = translateMethod;
    }
    translate(textToTranslate){
        return this.translateMethod(textToTranslate);
    }
}

class TranslationsEngine{
    constructor() {
    }
    toPigLatin = (text) => {
        let translatedText;
        translatedText = text.split(" ").map(word => this.wordToPigLatin(word));
        translatedText[0] = translatedText[0].charAt(0).toUpperCase() + translatedText[0].slice(1); // upper case first letter of sentense
        return translatedText.join(" ");
    }
    wordToPigLatin = (word) => {
        word = word.toLowerCase();
        let letters = [...word]; // split to letters
        letters.push(...letters.slice(0,1));
        letters.splice(0,1);
        letters.push("a", "y");
        return letters.join("");
    }
    toEnglishFromPigLatin = (text) => {
        let translatedText;
        translatedText = text.split(" ").map(word => this.wordFromPigLatin(word));
        translatedText[0] = translatedText[0].charAt(0).toUpperCase() + translatedText[0].slice(1); // upper case first letter of sentense
        return translatedText.join(" ");
    }
    wordFromPigLatin = (word) => {
        word = word.toLowerCase();
        let letters = [...word]; // split to letters
        letters.pop(); //remove y
        letters.pop(); //remove a
        letters.unshift(letters.pop());
        return letters.join("");
    }
}

let translationsEngine = new TranslationsEngine();
let translatorToPigLatin = new Translator(translationsEngine.toPigLatin)
let translatorFromPigLatin = new Translator(translationsEngine.toEnglishFromPigLatin)

console.log(translatorToPigLatin.translate("The quick brown fox"))

console.log(translatorFromPigLatin.translate("Hetay uickqay rownbay oxfay"))
