var css = document.querySelector("h3");
var h4 = document.querySelector("h4");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var colors = ["#ff0000", "#00ff00", "#0000ff"];
var btn = document.querySelector("button");

function random_color() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.onclick = function(evt) {
  h4.textContent = "";
  var random_color1 = random_color();
  console.log(random_color1);
  var random_color2 = random_color();
  console.log(random_color2);
  color1.value = random_color1;
  color2.value = random_color2;
  body.style.background =
    "linear-gradient(to right, " + random_color1 + ", " + random_color2 + ")";

  css.textContent =
    "Hex value: " + color1.value + " (color 1), " + color2.value + " (color2)";
};

function setGradient() {
  h4.textContent = "";
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent =
    "Hex value: " + color1.value + " (color 1), " + color2.value + " (color2)";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
