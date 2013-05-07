/*
What if choice1 is rock?

You're doing great! Now we consider the other scenarios. Let's break the problem down a little. What if choice1 is "rock"? Given choice1 is "rock",

a. if choice2 is "scissors", then "rock" wins.
b. if choice2 is "paper", then "paper" wins.

How do we structure this? It's a bit different from what we have already seen. We will first have an if statement. And then the code inside that if statement will be... another if statement!
Instructions

    Under the existing code in the compare function, write an if statement where the condition is choice1 equals "rock".
    In the code block for the if statement, write an if / else statement. In that statement, if choice2 is "scissors", return "rock wins". Otherwise, return "paper wins".



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
}
return compare
}