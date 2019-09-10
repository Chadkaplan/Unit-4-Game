$(document).ready(function () {

    // Global variables to use
    var wins = 0;
    var losses = 0;
    var currentScore = 0;

    // Making the functions global to call them when I need.
    function gameWin() {
        if (goalScore === currentScore) {
            wins++;
            // "You win"
            $("#wins").text(wins);
            reset();   
        }

    }
    function gameLoss() {
        if (goalScore < currentScore) {
            losses++;
            // "You lose"
            reset();  
        }

    }
    function reset() {
        gem1 = Math.floor(Math.random() * 12) +1;
        gem2 = Math.floor(Math.random() * 12) +1;
        gem3 = Math.floor(Math.random() * 12) +1;
        gem4 = Math.floor(Math.random() * 12) +1;
        goalScore = Math.floor(Math.random() * 100) + 20;
        console.log(gem1, gem2, gem3, gem4);
    }


    // Generate a random score for the player to achieve
    var goalScore = Math.floor(Math.random() * 100) + 20;
    // Checking that the random number works
    console.log(goalScore)
    // Update goal score div to the random number
    $("#goalScore").text(goalScore)
    // Call the reset function to start a game with base variables
    reset();
})