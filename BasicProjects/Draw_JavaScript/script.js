/*

Drawing a Rectangle

Perfect! See how easy this is?

You can draw squares and rectangles using the .strokeRect() method, which takes four arguments: how far in from the left to put the upper-left corner of the rectangle, how for down to put the upper-left corner of the rectangle, the width of the rectangle, and the height. An example might be:

context.strokeRect(10, 10, 50, 20);

You don't need to define any paths for rectangles; the above line of code alone will do the trick!
Instructions

Go ahead and draw your own rectangle.

*/
var my_canvas=document.getElementById("canvas");
var context = my_canvas.getContext("2d");

context.beginPath();
context.arc(80,75,40,0,2*Math.PI);
context.stroke();
context.strokeRect(10, 10, 50, 20);