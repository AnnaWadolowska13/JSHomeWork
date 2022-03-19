console.log(listOfDigits(23));
console.log(listOfDigits("23"));
console.log(listOfDigits("asdf"));
console.log(listOfDigits("as3kgs7n"));

function cutGivenStringOrNumber(anything){
    if(typeof anything === "number"){
        anything = anything.toString();
    }
    return [...anything]
}

function listOfDigits(anything){
    let prepareData = cutGivenStringOrNumber(anything);
    let result = [];
    for (let i = 0; i < prepareData.length; i++) {
        let piece = parseInt(prepareData[i]);
        if(!isNaN(piece)){
            result.push(piece);
        }
    }

    return result;
}
