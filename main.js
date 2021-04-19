const modals = document.querySelectorAll(".modal");

const overlays = document.querySelectorAll(".overlay");

const btnsOpenModal = document.querySelectorAll(".show-modal");

const btnsCloseModal = document.querySelectorAll(".close-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", () => {
    modals[i].classList.remove("hidden");
    overlays[i].classList.remove("hidden");
  });
}

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener("click", () => {
    modals[i].classList.add("hidden");
    overlays[i].classList.add("hidden");
  });

  overlays[i].addEventListener("click", () => {
    modals[i].classList.add("hidden");
    overlays[i].classList.add("hidden");
  });
}
let pregame1 = "/Pregame/Big10Surge/index.html";
let pregame2 = "burgerking";
let pregame3 = "marriagepact";
let pregame4 = "sunrise nu";
let pregame5 = "room decor";
let pregame6 = "evanston food";
let pregame7 = "quarantine diaries";

document.querySelector(".pregame1").onclick = function () {
  window.location.replace(pregame1);
};
document.querySelector(".pregame2").onclick = function () {
  window.location.replace(pregame2);
};
document.querySelector(".pregame3").onclick = function () {
  window.location.replace(pregame3);
};

document.querySelector(".pregame4").onclick = function () {
  window.location.replace(pregame4);
};

document.querySelector(".pregame5").onclick = function () {
  window.location.replace(pregame5);
};

document.querySelector(".pregame6").onclick = function () {
  window.location.replace(pregame6);
};
