/*
Prompting the User

Good! Now we'll want to do two things:

    Prompt the user for input, and
    Try to convert that input into a number.

JavaScript can get input from the user using the prompt() function. You can type a message in quotes between the parentheses to ask the user for input, like so:

prompt("What's up?");

This function returns a string, so rather than setting userAge equal to the prompt, we want to put another function around the prompt that will turn the value prompt() gets from the user into a number. We can do that with the parseInt() function, which works like this:

parseInt("4", 10);

where "4" is the thing we want to change from a string into a number, and 10 means "make this a base-10 number." (If you don't quite know what this means, don't worry—you just need to know that regular, run-of-the-mill numbers are always base-10.)
Instructions

Set your userAge variable equal to the result of passing prompt() to parseInt(). (That is, prompt() should go between parseInt()'s parentheses.)

*/

// Write your code below!
var userAge=parseInt(prompt('What is your age?'),10);