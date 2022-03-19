
class Fibonacci{
    constructor(){
        this.firstFibonacciArray = [1,1];
    }
    printNNumber(n){
        let fibonacciArray = [...this.firstFibonacciArray];
        if(n>2){
            let index = 2;
            while(index < n){
                fibonacciArray.push(fibonacciArray[index-1] + fibonacciArray[index-2])
                index++;
                // console.log(fibonacciArray, "w while")
            }
            console.log(fibonacciArray)
        } else if(n === 2){ 
            console.log(fibonacciArray);
        } else if(n === 1){
            console.log([fibonacciArray[0]]);
        }
    }
}


const fibo = new Fibonacci();

fibo.printNNumber(1);
fibo.printNNumber(2);
fibo.printNNumber(6);
fibo.printNNumber(1);

