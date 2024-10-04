let firstnumber = 4;
let secondnumber = 7;
let sum = firstnumber + secondnumber 
let hasblackjack = false
// false is a default value and u dont have blackjack at start
let isalive = true
// ye bnaya h hamne, taki hame pta rahe ki ham abhi bhi game me h

if ( sum < 21){
    console.log("take one more card")
    isalive = true
}
else if( sum === 21){
    console.log("Congrats u win")
    hasblackjack= true
    // becoz yahi hoga blackjack
}
// we use === instead of == to check whether its equal to or not
else{
    console.log("you lost. oops")
    isalive= false
}
//  to remember the state of game, we use a new datatype that is boolean
console.log(hasblackjack)
// now we have the memory ki blackjack hua tha ya nhi
console.log(isalive)
