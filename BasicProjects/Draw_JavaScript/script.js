/*The Nakedness Beneath jQuery

If you've done any of the jQuery exercises, you know how how a JavaScript library can manipulate HTML elements. But we can—and will!—manipulate the <canvas> element directly with JavaScript. No jQuery needed!

As with jQuery, we can use JavaScript to grab onto HTML elements through the document object, which represents (as you might have guessed) the HTML document. JavaScript has a built-in method, .getElementById(), that we can call on document in order to get a particular ID.

We'll also need to get the proper context for our drawing; in this case, it will be two-dimensional. We can do this by creating a context variable and setting it equal to:

my_canvas.getContext("2d");

This will get us all set up to draw.

We've provided the HTML and CSS for you; you're in charge of the JavaScript!
Instructions

Create a variable, my_canvas, and set it equal to the result of calling .getElementById() on document. You should pass your canvas' ID of 'canvas' as an input to your method.

(If you've done jQuery coursework, note that you don't need a "#" in 'canvas', since .getElementById() already assumes it's getting an ID.)
*/

var my_canvas=document.getElementById("canvas");
var context = my_canvas.getContext("2d");