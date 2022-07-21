import "./style.css";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = function() {
  //write your code here
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let palos = ["♥", "♣", "♦", "♠"];
  let colors = ["red", "black"];

  let paloSuperior = document.getElementById("palo-superior");
  let paloInferior = document.getElementById("palo-inferior");

  paloSuperior.innerHTML = palos[getRandomIntInclusive(0, 3)];
  paloInferior.innerHTML = paloSuperior.innerHTML;

  document.getElementById("numero").innerHTML =
    numbers[getRandomIntInclusive(0, 11)];

  document.querySelector(".color-fondo").style.color =
    colors[getRandomIntInclusive(0, 1)];
};
