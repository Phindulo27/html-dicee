function diceGame(){
    alert("To play refresh the page")
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageName = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = imageName;
var imageName = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").src = imageName;
var h1 = document.querySelector("h1");
if (randomNumber1 >randomNumber2) {
    h1.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    h1.textContent = "Player 2 Wins!";
} else {
    h1.textContent = "It's a Draw!";
}
}