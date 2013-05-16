/*

Adding Text

Perfect! Now let's add a little text to our picture.

We can set the font size and style with .font. For instance,

context.font = "30px Garamond";

will make our font 30 pixels high and in the Garamond typeface.

We can set actual text with .fillText(). For example, we could do this:

context.fillText("Hello!",15,175);

This will type "Hello!" and will put the upper left-hand corner of the text box 15 pixels in from the left and 175 pixels down.
Instructions

Go ahead and use context.font and context.fillText() to add some text to your image. It can be whatever you like!


*/
var my_canvas=document.getElementById("canvas");
var context = my_canvas.getContext("2d");

context.beginPath();
context.arc(80,75,40,0,2*Math.PI);
context.stroke();
context.font="30px Garamond";
context.fillText("Hello!",20,122)
context.fillStyle="blue"
context.fillRect(10, 10, 50, 20);