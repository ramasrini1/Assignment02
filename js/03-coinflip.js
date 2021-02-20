//Generates a number 1 or 0 randomly
let randNumber = Math.round(Math.random());

var coinFlip;
var choice;

//if randNumber is 1 set it to heads otherwise set it to tails
(randNumber == 1)? coinFlip = "heads": coinFlip = "tails"

var userInput = prompt("To make heads as selection: Enter heads or h (upper/lower case)\n" +
                       "To make tails as selection: Enter tails or t (upper/lower case)\n" );
userInput = userInput.toLowerCase();

if ( (userInput === "h" || userInput === "heads") || ( userInput === "t" || userInput === "tails") ){
    // Valid user entry set choice to heads or tails. 
    (userInput === "h" || userInput === "heads")? choice = "heads": choice = "tails"
    if ( choice === coinFlip){
        alert(`The flip was ${coinFlip}, and you choose ${choice}. You Won!!`);
    } else {
        alert(`The flip was ${coinFlip}, but you choose ${choice}. You Lost`);
    }
}else {  // Invalid entry 
    alert("Invalid Entry "+ userInput + " Enter heads or tails");
}

