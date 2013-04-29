/*Old enough to play?

With great programming powers, comes great responsibility. We should check if the user is old enough to play!

This involves two bits of code.

    Using prompt to ask the user for their age. You can do it like this: var age = prompt("What's your age?"); and the variable age will hold the user's response.
    Writing an if / else statement based on the age of the user.

Note: we have to store the result of the prompt in a variable! Otherwise, we can't make use of it in the if / else statement.
Instructions

    Under the existing code, declare a variable age.
    Make age equal to the answer you prompt the user to give (ie. ask the user 'how old are you?')
    If the user is less than 18, use console.log and tell them they're allowed to play but you take no responsibility.
    Else, use console.log and give them an encouraging message to play on!


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