let cards = document.getElementsByClassName("card");
let start = document.getElementById("start");
let arrayDisney = ["img/bambi.jpg", "img/bambi.jpg", "img/cendrillon.jpg", "img/cendrillon.jpg", "img/daisy.jpg", "img/daisy.jpg", "img/dalmatien.jpg", "img/dalmatien.jpg", "img/dingo.jpg", "img/dingo.jpg", "img/donald.jpg", "img/donald.jpg", "img/mickey.jpg", "img/mickey.jpg", "img/pan-pan.jpg", "img/pan-pan.jpg"];
let nbImgMax = arrayDisney.length;


function insertImageInCardDivs() {
  for (var i = 0; i < cards.length; i++) {
    var arrayDisneyRandom = arrayDisney[Math.floor(Math.random()*12)];
    var imgElement = document.createElement("img");
    imgElement.src = arrayDisneyRandom;
    arrayDisney.splice(0, 1);
    cards[i].appendChild(imgElement);
    console.log(document.getElementById("card1"));
  }
}

start.addEventListener("click", insertImageInCardDivs);
