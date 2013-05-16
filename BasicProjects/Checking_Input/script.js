/*
isNaN()

Great work! If you tried a few non-numeric inputs, though, you probably noticed what JavaScript returned: NaN.

NaN stands for "not a number" and is what JavaScript spits out when you give a non-number to parseInt(). As responsible JavaScript programmers, we should catch when a user enters a non-number and log an error message to the console.

JavaScript has a built-in function, isNaN(), that returns true when you give it a value that's NaN and false otherwise. We'll use this to console.log() a message if the userAge ends up not being a number.
Instructions

Set up an if statement in the editor. It should check if userAge isNaN(); if so, it should log a message to the console. (No need for an else statement just yet.)

Go ahead and provide a non-number as input in order to trigger your console.log()!

*/

// Write your code below!
var userAge=parseInt(prompt('What is your age?'),10);

if(isNaN(userAge)){
    console.log("Please enter a number")
}