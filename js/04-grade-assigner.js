let score = Number(prompt("Enter number between 1 and 100"));

console.info(`You entered: ${score}`);

if ( score >= 0 && score <= 100) {
    if ( score >=60 && score < 70 ) {
        window.console.info("You received a D");
    } else if( score >= 70 && score < 80 ) {
        window.console.info("You received a C");
    } else if ( score >= 80 && score < 90) {
        window.console.info("You received a B");
    } else if ( score >= 90 && score <= 100) {
        window.console.info("You received an A");
    } else {
        window.console.info("You received a F");
    }

} else {
     window.console.info(`Invalid Entry: ${score}. Only numbers between 1 and 100 are accepted`);
     alert( `Invalid entry: ${score}. \nOnly numbers between 1 and 100 are accepted`);
}

