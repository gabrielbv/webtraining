/*
What if choice1 is paper?

Great job! Now we have to consider, what if choice1 is "paper". We already know the result if choice2 is also "paper". Where choice1 = choice2, the function returns "There is a tie!"

But what about the other two scenarios:

a. if choice2 is "rock", then "paper" wins.
b. if choice2 is "scissors", then "scissors" wins.
Instructions

    Under your existing code in the function body, use the same structure as in the previous exercise to add in these two extra scenarios.
    This will involve first writing an if statement, and then putting an if / else statement inside that first if statement.



*/
/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}*/
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
}
return compare
}