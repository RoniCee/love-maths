// Wait for the DOM to finsih loading before running the game

document.addEventListener("DOMContentLoaded", function()    {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit")    {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert("You clicked ${gameType}");
            }
        })
    }
})

function runGame()  {

}
function checkAnswer()  {

}
function calculateCorrectAnswer()   {

}
function incrementScore()   {

}

function displayAdditionQuestion()   {

}

function displaysubtractQuestion() {

}
function displayMultiplyQuestion()  {

}

