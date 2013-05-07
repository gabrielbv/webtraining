/*
Log it!

Perfect! You've now got the engine of your search program running. It will:

    Loop through the array,
    Compare each letter to the first letter of your name, and if it sees that letter:
    It will push that letter and all the letters that follow it to an array, stopping when the number of letters it pushes are equal to the number of letters in your name.

Instructions

Under your existing code (and outside all your loops!), set up an if/else statement. If you don't have any hits, log "Your name wasn't found!" to the console. Otherwise, log the hits array to the console.

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
if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
	console.log(hits);
}