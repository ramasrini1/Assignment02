let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter another number"));

//console.info( num1 + " is  " + typeof(num1));
//console.info( num2  +  "is" +  typeof(num2));

if (  num1 !== num1  || num2 !== num2 ) {
    // If you are here one or 2 of the values entered is a NaN.
    window.document.write(`Enter Valid Number/s`);
    window.console.info(`Enter Valid Number/s`);
} else {
    if ( num1 > num2) {
        window.document.write(`The greater value is ${num1} and the numbers you entered are ${num1} and ${num2}`);
        window.console.info(`The greater value is ${num1} and the numbers you entered are ${num1} and ${num2}`);
    } else if ( num1 < num2){
        window.document.write(`The greater value is ${num2} and the numbers you entered are ${num1} and ${num2}`); 
        window.console.info(`The greater value is ${num2} and the numbers you entered are ${num1} and ${num2}`); 
    } else {
        window.document.write(`Both values entered are equal to ${num2} `);  
        window.console.info(`Both values entered are equal to ${num2} `);
    }
}

