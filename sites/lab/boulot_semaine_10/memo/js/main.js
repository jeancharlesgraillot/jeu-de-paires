let cards = document.getElementsByClassName("card");
let start = document.getElementById("start");
let arrayDisney = ["img/bambi.jpg", "img/bambi.jpg", "img/cendrillon.jpg", "img/cendrillon.jpg", "img/daisy.jpg", "img/daisy.jpg", "img/dalmatien.jpg", "img/dalmatien.jpg", "img/dingo.jpg", "img/dingo.jpg", "img/donald.jpg", "img/donald.jpg", "img/mickey.jpg", "img/mickey.jpg", "img/pan-pan.jpg", "img/pan-pan.jpg"];
let imgElements = document.getElementsByClassName("images");
let array2 = [];



function insertImageInCardDivs() {
  for (var i = 0; i < imgElements.length; i++) {
    var arrayDisneyRandom = arrayDisney[Math.floor(Math.random() * arrayDisney.length)];
    imgElements[i].src = arrayDisneyRandom;


    arrayDisney.splice(arrayDisneyRandom, 1);
    array2.push(arrayDisney.splice(arrayDisneyRandom, 1));
    console.log(array2);
  }

}

start.addEventListener("click", insertImageInCardDivs);
