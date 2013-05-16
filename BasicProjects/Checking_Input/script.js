/*
Finishing the If / Else If / Else Statement

Great work! Now let's round out our if statement.
Instructions

First, add an if else statement to check whether the user's age is within a certain range. You could check to see if their age is over 18, below 100, or equal to your age! It can be whatever you like, but it should result in logging a message to the console.

Second, add an else statement that also logs a message to the console.

*/

// Write your code below!
var userAge=parseInt(prompt('What is your age?'),10);

while(isNaN(userAge)){
    console.log("Please enter a number")
    userAge=parseInt(prompt('What is your age?'),10);
}
if(userAge <=18){
    console.log("You're too young")
}
else if(userAge===26){
    console.log("That's nice")
}
else{
    console.log("You're ok!")
}