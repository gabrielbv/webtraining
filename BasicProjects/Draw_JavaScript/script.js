/*

Lines and Arcs

Great! Now we're ready to start drawing on our canvas.

You can draw lines with .moveTo() and .lineTo(). You can imagine the first method as moving your pen into position, and the second as telling your pen how far to draw the line.

You might draw a horizontal line with

context.moveTo(20, 20);
context.lineTo(100, 20);

You can draw arcs (curves) with .arc(). You could try

context.beginPath();
context.arc(75,75,35,0,Math.PI);
context.stroke();

to draw a semicircle.

Let's try drawing an arc!
Instructions

On three separate lines:

    Call .beginPath() on context to let the canvas know you want to define a path.
    Call .arc() on context with whichever elements you like. (We think the ones listed above make a nice arc.) This determines the shape of your path.
    Finally, call .stroke() on context to tell the canvas you want to draw the path you've just defined, then click Save & Submit Code.


*/

var my_canvas=document.getElementById("canvas");
var context = my_canvas.getContext("2d");

context.beginPath();
context.arc();
context.stroke();