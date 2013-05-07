/*

First, you'll want to set your second loop's iterator to start at the first one, so it picks up where that one left off. If your first loop starts with

for(var i = 0; // rest of loop setup

your second should be something like

for(var j = i; // rest of loop setup

Second, think hard about when your loop should stop. Check the Hint if you get stuck!

Finally, in the body of your loop, have your program use the .push() method of hits. Just like strings and arrays have a .length method, arrays have a .push() method that adds the thing between parentheses to the end of the array. For example,

newArray = [];
newArray.push('hello');
newArray[0] // equals 'hello'

Instructions

Okay! Go ahead and add that second for loop inside the body of your if statement.


*/

/*jshint multistr:true */

text ="Gabi text Gabi text Gabi text Gabi text Gabi text Gabi Gabi"
var myName="Gabi"
var hits=[]

for(var i=0; i<text.length ; i++){
    if(text[i] =='G'){
        for(var j = i; j < (myName.length + i); j++) {
    		hits.push(text[j]);
		}
    }
}