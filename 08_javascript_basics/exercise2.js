/*
Parameter Names

Just like in math, a function can take multiple arguments. When we define a function, we give each parameter a name. For example, I've named the cube function's single argument x.

When you call a function, you don't need to know the parameter names. To show this, go ahead and change the name of the parameter in the cube function from x to n.

Now of course that means that you have to change it everywhere it's used inside the function too. So you'll need to change line 3 to read return n * n * n; as well.
Instructions

Run the code after you've changed the parameter name to verify that the call cube(5) is not impacted at all by this change. It should still output the same result.

*/

// Change the argument name from x to n
var cube = function (n) {
    return n * n * n;
};

// When you call cube with the new argument name,
// it should still return the same result.
cube(5);
