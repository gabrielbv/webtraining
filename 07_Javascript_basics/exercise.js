/*

The story heats up!

Now you have to create different scenarios. Good thing we know how to do that using if / else statements.

If userAnswer is "yes" and they are feeling lucky, print out: "Batman hits you very hard. It's Batman and you're you! Of course Batman wins!"

Otherwise, print out: "You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman."

Remember: = is for assignment, and === is to check if things are equal!
Instructions

Use an if / else statement to write out the last part of this game!

*/
// Check if the user is ready to play!
confirm("I am ready to play!");

var age =prompt("What's your age");

if(age<18)
{
    console.log("You're allowed to play but we are not responsible for you")
}
else
{
    console.log("Great! let's play")
}
console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him. ")
console.log("Batman glares at you.")

var userAnswer=prompt("Are you feeling lucky,punk?");

if(userAnswer === "yes")
{
    console.log("Batman hits you very hard. It's Batman and you're you!Of course Batman wins")
}
else
{
    console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.")
}