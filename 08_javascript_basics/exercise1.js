/*
Computer Choice: Part 2

We have computerChoice but it now equals a random number between 0 and 1. We need to somehow translate this random number into a random choice of rock, paper, or scissors. How do we do this?!

    If computerChoice is between 0 and 0.33, make computerChoice equal to rock.
    If computerChoice is between 0.34 and 0.66, make computerChoice equal to paper.
    If computerChoice is between 0.67 and 1, make computerChoice equal to scissors.

But there are three outcomes! If / else only lets us have two outcomes. What now?! We need to use if / else if / else. See the hint for the full sytnax. You will laugh at how easy it is.
Instructions

    Under your existing code, write out the if / else if / else statement.
    In the respective code blocks, change the value of computerChoice based on the rules stated above. Remember, you do NOT have to use var when changing the value of a variable that already exists.



*/
var userChoice= prompt("Do you choose rock,paper or scissors?")
var computerChoice=Math.random()
console.log(computerChoice)
if (computerChoice<0.33)
{
    console.log("rock")
}
else if(computerChoice>0.67)
{
    console.log("scissors")
}
else{
    console.log("paper")
}