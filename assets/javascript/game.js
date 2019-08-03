// GLOBAL VARIABLES
//==================================================================

// Crystal Variables
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    orange:
    {
        name: "Orange",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    }
};

// Scores (Current and Target)
var currentScore    = 0;
var targetScore     = 0;

// Wins and Losses
var winCount        = 0;
var lossCount       = 0;

// FUNCTIONS
//==================================================================

// Helper function for getting random numers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts the Game (and restarts the game)
var startGame = function () {

    // Reset the Current Score
    currentScore = 0;

    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);

    // Set different values for each of the crystals (between 1 and 12)
    crystal.blue.value       = getRandom(1, 12);
    crystal.orange.value     = getRandom(1, 12);
    crystal.purple.value     = getRandom(1, 12);
    crystal.red.value        = getRandom(1, 12);

    // Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // Testing Console
    console.log("------------------------------")
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Orange: " + crystal.orange.value + " | Purple: " + crystal.purple.value + " | Red: " + crystal.red.value); 
    console.log("------------------------------")
}

// Respond to clicks on the crystals
var addValues = function(crystal) {

    // Change currentScore
    currentScore = currentScore + crystal.value;

    // Change the HTML to reflect changes to currentScore
    $("#yourScore").html(currentScore);

    // Call the checkWin Function
    checkWin();

    // Testing Console
    console.log("Your Score: " + currentScore);

}

var checkWin = function() {

    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry. You lost!");
        console.log("You Lost");

        // Add to Loss Counter
        lossCount++;

        // Change Loss Count HTML
        $("#lossCount").html(lossCount);

        // Restart the Game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!");
        console.log("You Won!");

        // Add to Wind Counter
        winCount++;

        // Change to Win Count HTML
        $("#winCount").html(winCount);

        // Restart the game
        startGame();
    }
}


// MAIN PROCESS
//==================================================================

// Starts the Game the First Time.
startGame();

$("#blue").click(function() {
    addValues(crystal.blue);
});

$("#orange").click(function() {
    addValues(crystal.orange);
});

$("#purple").click(function() {
    addValues(crystal.purple);
});

$("#red").click(function() {
    addValues(crystal.red);
});