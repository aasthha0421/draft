// variable in js written in camelcase ex: aasthaSingh , not in aastha-singh 

let saveEl = document.getElementById("save-el") ;
let countEl= document.getElementById("count-el") ;      //passing the argument
/*it means asking html document to bring element which has id count el 
and then u store that element in variable countEl */
let count = 0;
 

function increment() {
    count = count + 1;
    countEl.innerText = count
//.innertext means it changes the text betwen the tags to get change or equal to whatever value we have
}

/* document and console are like functions in which we are giving one id name to grab the element from
in .log , we are passing a variable, we want to log to console 
if we dont do this, then function wouldnt know what to print
chef=are functions
arguments we pass= ingredients which chef uses to cook



DOM: DOCUMENT OBJECT MODEL
helps to modify website by using js
document here means HTML document , which we are interacting with
object means they have taken HTML document and shoved it in js object
model is representation of a real thing ex;   <h2 id="count-el">0</h2> it is a real thing
let countEl= document.getElementById("count-el")  is a model */

//  to save both count and dash at one variable
function save(){
    let countSTR = count + " - "
    // now saving new count value with dash
    saveEl.textContent += countSTR
    // it will print count whenever save function is called
   countEl.textContent = 0;
// ye jo entry abhi save hui, uske bd ke entry ke liye score 0 krdeta h, atleast 0 dikhta h
   count = 0;
/*  we did this becoz js remembers its previous activities or score, so we have to 
let them know ki start kro 0 se */
}
/* drawback of innertext: if u want space, it wont give u as it only shows
human readable element although he is AWARE OF styling so thats why
we use textcontent in place of innertext */
save()
// calling function




