let pregame1 = "/Pregame/Big10Surge/index.html";
let pregame2 = "insert";
let pregame3 = "insert";
let pregame4 = "insert";
let pregame5 = "insert";
let pregame6 = "insert";
let pregame7 = "insert";

let articleNames = document.getElementsByClassName("story");
console.log(articleNames);

document.querySelector(".pregame1").onclick = function () {
  window.location.replace(pregame1);
};
document.querySelector(".pregame2").onclick = function () {
  window.location.replace(pregame2);
};
document.querySelector(".pregame3").onclick = function () {
  window.location.replace(pregame1);
};

document.querySelector(".pregame4").onclick = function () {
  window.open(article4);
};

document.querySelector(".pregame5").onclick = function () {
  window.open(article5);
};

document.querySelector(".pregame6").onclick = function () {
  window.open(article6);
};
