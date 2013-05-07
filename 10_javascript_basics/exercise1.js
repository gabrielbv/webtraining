/*
The second 'if' statement

Good work! We're almost there.

In the first branch of our if statement (right after the console.log() where we congratulate the player for hitting the dragon), let's set totalDamage equal to totalDamage + damageThisRound. There's a shortcut for this: the += operator! When you type

totalDamage += damageThisRound

you're telling JavaScript to add totalDamage and damageThisRound together, then assign that new value to totalDamage.
Instructions

Go ahead and set totalDamage to totalDamage plus damageThisRound.

Then, inside your first if statement, create a second if statement that checks to see if totalDamage is greater than or equal to 4. If so, it should log to the console that the player slew the dragon and set slaying equal to false (since the dragon's dead, the slaying is over).

If totalDamage isn't greater than or equal to 4, youHit should be assigned a new random 1 or 0. (This is as easy as setting youHit to the same expression you used when you first declared it.)


*/

var slaying=true;

var youHit =Math.floor(Math.random() * 2);
var damageThisRound=Math.floor(Math.random()*5+1)
var totalDamage=0

while(slaying){
    if (youHit===1){
        console.log( "You slayed the dragon")
        totalDamage+=damageThisRound;
        if(totalDamage>=4){
            console.log("player slew the dragon")
            slaying=false;
        }
        else{
            youHit=Math.floor(Math.random() * 2)
        }
        
        
        
    }
    else{
        console.log( "the dragon eated you")
    }
    slaying =false;
}