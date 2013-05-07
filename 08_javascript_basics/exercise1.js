/*
Both choices are the same!

Now comes the fun part! We need to create a function. It will take two parameters (ie. the two choices made) and then return the winning choice.

When programming a game like this, you have to first figure out all the various outcomes. One outcome is that the choice the user makes is equal to the choice the computer makes.
Instructions

    We carried over the code from the previous section, but it is a comment. Leave it there for now.
    Below the comment, declare a function called compare().
    It takes two parameters, choice1 and choice2. There is a reason we don't use the variable names (userChoice/computerChoice) as the parameters! (Read the Hint for more.)
    Inside the function, write an if statement such that if the two parameters equal each other, the function will return "The result is a tie!"



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
}
}