let random1 = Math.ceil(6 * Math.random());
let random2 = Math.ceil(6 * Math.random());
let diceimage1 = "/images/dice" + random1 + ".png";
let diceimage2 = "/images/dice" + random2 + ".png";

if (random1 > random2) {
  document.querySelector("h1").innerHTML = "Pallab Wins,   I'm Sorry Baby 😢";
} else if (random2 > random1) {
  document.querySelector("h1").innerHTML =
    "Rachna Wins .   Cheers.    Yaay! 🍺 ";
} else {
  document.querySelector("h1").innerHTML = "We both win.    Yaay 🎉";
}

document.querySelector(".img2").setAttribute("src", diceimage2);

document.querySelector(".img1").setAttribute("src", diceimage1);
document.queryselector(".img1").setattribute("src", diceimage1);
