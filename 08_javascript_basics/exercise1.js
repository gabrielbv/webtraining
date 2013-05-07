/*
Computer Choice: Part 1

Awesome! We now need the computer to make a choice. The game is only going to be fun if the computer chooses randomly. Luckily JavaScript has something that can help with this.

If we declare a variable and make it equal to Math.random(), that variable will equal a number between 0 and 1.
Instructions

    Under your previous code, declare a variable called computerChoice and make it equal to Math.random().
    Print out computerChoice so you can see how Math.random() works. This step isn't needed for the game - just useful for learning!


*/
var userChoice= prompt("Do you choose rock,paper or scissors?")
var computerChoice=Math.random()
console.log(computerChoice)