$(document).ready(function () {

    // Global variables to use
    var wins = 0;
    var losses = 0;
    var currentScore = 0;

    // Making the functions global to call them when I need.
function gamewin() {
        wins++;
        alert("You win!");
        $("#wins").text(wins);
        reset();
    }

    function gameLoss() {
        losses++;
        alert("You lose :(");
        $("#losses").text(losses);
        reset();
    }

    function reset() {
        gem1 = Math.floor(Math.random() * 12) + 1;
        gem2 = Math.floor(Math.random() * 12) + 1;
        gem3 = Math.floor(Math.random() * 12) + 1;
        gem4 = Math.floor(Math.random() * 12) + 1;
        goalScore = Math.floor(Math.random() * 100) + 20;
        $("#goalScore").html(goalScore);
        currentScore = 0;
        $("#currentScore").html(currentScore);
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

    // Add functionality to the gem buttons

    // Gem 1
    $("#gem1").on("click", function () {
        currentScore += gem1;
        $("#currentScore").text(currentScore);
        if (goalScore === currentScore) {
            gamewin();
        }
        if (goalScore < currentScore) {
            gameLoss();
        }
    });

    // Gem 2
    $("#gem2").on("click", function () {
        currentScore += gem2;
        $("#currentScore").text(currentScore);
        if (goalScore === currentScore) {
            gamewin();
        }
        if (goalScore < currentScore) {
            gameLoss();
        }
    });

    // Gem 3
    $("#gem3").on("click", function () {
        currentScore += gem3;
        $("#currentScore").text(currentScore);
        if (goalScore === currentScore) {
            gamewin();
        }
        if (goalScore < currentScore) {
            gameLoss();
        }
    });

    // Gem 4
    $("#gem4").on("click", function () {
        currentScore += gem4;
        $("#currentScore").text(currentScore);
        if (goalScore === currentScore) {
            gamewin();
        }
        if (goalScore < currentScore) {
            gameLoss();
        }
    });


})