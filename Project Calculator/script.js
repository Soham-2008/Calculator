var soundEffect = new Audio()
soundEffect.src = "buttonClickSound (mp3cut.net).mp3"

function appendNumber(buttonValue) {

    var inputScreen = document.getElementById("screenInput")
    inputScreen.value += buttonValue

}

function clr() {

    var inputScreen = document.getElementById("screenInput")
    inputScreen.value = null

}

function calculate(){

    inputScreen = document.getElementById("screenInput")
    var expression = inputScreen.value
    var answer = eval(expression)
    inputScreen.value = answer

}