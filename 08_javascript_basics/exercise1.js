/*
What if choice1 is scissors?

Almost there! Last, we consider what if choice1 is "scissors". In this case:

a. if choice2 is "rock", then "rock" wins.
b. if choice2 is "paper", then "scissors" wins.
Instructions

    Under your old code, use the same structure as the past two exercises and finish off your function.
    Call your function and pass in userChoice and computerChoice as your two parameter values.
    
*/
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!"
    
    
    if(choice1="rock"){
        if(choice2="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
           
    }
    
     if(choice2="rock"){
        if(choice1="paper"){
            return "paper wins";
        }
        else{
            return "rock wins";
        }
           
    }
     if(choice1="scissors"){
        if(choice1="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
           
    }
}
return compare(userChoice,computerChoice)
}