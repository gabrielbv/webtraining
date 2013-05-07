/*

Your "if" statement

Nice work! Now let's move on to the if statement.

We'll want to place the if statement inside our for loop to make sure the program checks the if statement each time it moves forward through the loop. Essentially, the for loop is saying: "Hey program! Go through every letter in 'text'." The if statement will say: if you see something interesting, push that text into an array!"

You can treat a string like an array of characters. For instance, you know that

var myArray = ['hello', 'world'];
myArray[0]; // equals 'hello'

But this also works on strings!

var myName = 'Eric';
myName[0] // equals 'E'

The new
Instructions

Add your if statement in the body of your for loop. It should check to see whether the current letter is equal to the first letter of your name. (Capitalization counts!)

There's no need to put anything between the {}s of your if just yet.


*/

/*jshint multistr:true */

var text ="Gabi Gabi Gabi Gabi Gabi Gabi Gabi Gabi Gabi Gabi Gabi Gabi"
var myName="Gabi"
var hits=[]

for(i=0; i>text.length ; i++){
    if(text[i]==='G'){}
}