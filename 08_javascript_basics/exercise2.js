/*Defining a function

In JavaScript a function can be defined by preceding a bunch of code with the word function followed by its inputs.

The inputs are known as parameters and are enclosed with (). The associated code is enclosed with {}.

In the editor you will see the beginnings of a definition for a cube function.
Instructions

Complete the cube function and use it to calculate the cube of 7. Use the square function as a reference on how to do this.
*/


// Accepts a number x as input and returns its square
var square = function(x) {
    return x * x;
};

// Accepts a number x as input and returns its cube
var cube = function(x) {
    return x * x * x ;
};

cube(7);