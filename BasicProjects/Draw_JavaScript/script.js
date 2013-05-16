/*
Drawing a Circle

We saw how to draw a semicircle in the last exercise. By going all the way around to 2π, we can draw an entire circle!

The code looks something like this:

context.arc(95, 85, 40, 0, 2*Math.PI);

Remember, the order of arguments is:

.arc(x, y, radius, startAngle, endAngle)

where x is how far over to the right you start, y is how far down you start, radius is the radius of the circle, startAngle is the beginning angle, and endAngle is the ending angle. A circle goes from the angles 0 to 2 * Math.PI.
Instructions

Update your .arc() to draw a circle in the editor. It can be any size you want!

*/
var my_canvas=document.getElementById("canvas");
var context = my_canvas.getContext("2d");

context.beginPath();
context.arc(80,75,40,0,2*Math.PI);
context.stroke();