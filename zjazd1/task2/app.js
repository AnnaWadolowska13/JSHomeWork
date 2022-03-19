buttonStart = document.getElementById("start");

buttonStart.addEventListener("click", ()=> {
    console.log("try to guess number");
    const game = new guessNumberGame([1,10]);
    game.play();
})



class guessNumberGame{
    constructor(rangeArray){
        this.min = rangeArray[0];
        this.max = rangeArray[1];
        this.win = false;
        this.secretNumber = Math.floor( Math.random() * (this.max - this.min +1) + this.min );
        this.triesArray = [];
    }
    play(){
        while(!this.win){
            this.tryToGuess();
        }
        console.log("You win! Secret Number is", this.secretNumber);
        console.log("You guess it in", this.triesArray.length, "tries");
    }
    tryToGuess(){
        let number = parseInt(prompt("try to guess number"));
        if(isNaN(number)){
            console.log("try to write number");
        }else{
            this.isNumberRepeat(number)
            if(number === this.secretNumber){
                this.win = true;
            }else{
                if(number > this.secretNumber) console.log(number, " is too large");
                if(number < this.secretNumber) console.log(number, "is too small");
            }
        }

    }
    isNumberRepeat(number){
        console.log(number);
        if(!this.triesArray.some(x => x === number)){
            this.triesArray.push(number);
        }
    }
}
