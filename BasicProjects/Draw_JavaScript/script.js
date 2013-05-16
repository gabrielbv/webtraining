/*


Using .fillStyle

Great work! Things are shaping up nicely (pun super intended).

We might want to create shapes with a little color, though; right now we only have outlines. In order to give a shape some color, we just type

context.fillStyle = "color name";

we can use hexadecimal color names, or simple strings like "blue" or "red."

Let's give our rectangle some color!
Instructions

    Change your .strokeRect() call to a .fillRect() one. This lets the canvas know to expect a filled-in rectangle instead of an outline!
    Somewhere above your .fillRect(), set the .fillStyle to your favorite color. (Note that any shape drawn after the .fillStyle will take on the color you define.)


*/
var my_canvas=document.getElementById("canvas");
var context = my_canvas.getContext("2d");

context.beginPath();
context.arc(80,75,40,0,2*Math.PI);
context.stroke();
context.fillStyle="blue"
context.fillRect(10, 10, 50, 20);