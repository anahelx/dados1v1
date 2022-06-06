var randomNumber1 = 1 + Math.floor((Math.random() * 6));
var randomNumber2 = 1 + Math.floor((Math.random() * 6));

var randomImgSrc = "images/dice" + randomNumber1 + ".png"; //dadinho 1 até 6
var randomImgSrc2 = "images/dice" + randomNumber2 + ".png"; //repete para o player 2

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "jogador 1 venceu!";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "EMPATE!!!";
}
else {
  document.querySelector("h1").innerHTML = "jogador 2 venceu!!";
}
