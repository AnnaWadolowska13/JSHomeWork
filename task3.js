console.log(rotateArrayByKElements([1,2,3,4,5,6], 2))

function rotateArrayByKElements(array, k){
    array.push(...array.slice(0, k));
    array.splice(0, k);
    return array;
}
