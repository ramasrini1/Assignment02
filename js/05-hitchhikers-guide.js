var playGame = prompt("Do you want to play the Hitchhiker\'s Guide To Galaxy Game?", 'Enter yes to play or no to quit');

var gameIntroMsg = 
               "You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. " + 
               "You are disoriented, lost, hungry and extremely thirsty. " +
               "You see a speck of light in the distance ahead of you, something shimmering to your right, " + 
               "and the sound of running water to your left. " +
               "Your back is against the wall.";

if (playGame === "no"){
      alert("Thank You !! Play some other time");
}   else if (playGame === "yes") {
      alert(gameIntroMsg);
      var direction = prompt("Which direction do you want to head. Please enter forward, left, or right ");
      
      switch (direction) {
        case "forward":
                alert("You walk 100 yards and safely make your way out of the cave.");
                break;
        case "left":
                alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
                break;
        case "right":
                alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. " +
                    "You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
                break;
        default:
                alert("The ghost of Captain Chingadera has condemned you to eternal damnation " +
                   "and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
        }

        // Game is over . Rate the game
        var rate =  Number(prompt("Game is Over!!. Rate the game ", 'Enter a number between 1 and 10'));
        //alert("rate is " + rate);
        if ( rate < 1 || rate > 10 ){
            alert("Thank you for playing the game. It has ended");
        } else if ( rate >=6 && rate <=10){
            alert("Thank You and play again. ");
        } else if ( rate >=1 && rate < 6 ) {
            alert("Thank You. You are working hard to improve the game. ");
        }

} else {
    alert("Invalid entry. Enter yes or no");
}
