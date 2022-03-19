//1
const sub =[10,20];

// console.log(isNumberPrime(23));
console.log("prime numbers", sieveOfEratosthenes(sub));


function isNumberPrime(number){
    // console.log("prime check", number)
    const squareRoot = Math.sqrt(number);
    for(let i=2; i <= squareRoot; i++){
        if(number%i == 0) return false
    };
    return true;
}

function sieveOfEratosthenes(sub){

    let arrayToCheck =[], start, end;
    if(sub[0] > sub[1]){
        start = sub[1];
        end = sub[0];
    }else{
        start = sub[0];
        end = sub[1];
    }
    if(start===1)start++; // 1 is not a prime so i skip it
    // 0 symbolised is that number not a prime
    //in start we assume that we have all prime numbers and check it
    for(let i=start; i <= end; i++){
        arrayToCheck.push(i);
    }

    for(i=0; i < arrayToCheck.length; i++){ 
        if(arrayToCheck[i] !== 0){// if number is not 0 we must to check it
            let j = arrayToCheck[i] *2; // remove all of multiples
            while(j <= end){
                arrayToCheck[arrayToCheck[i] + i] = 0;
                j += arrayToCheck[i];
            }
            if(!isNumberPrime(arrayToCheck[i])){ arrayToCheck[i]=0;} // remove that number if isn't prime
        }
        // console.log(arrayToCheck);
    }
    return arrayToCheck.filter((value) => value !== 0);
}
