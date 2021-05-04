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

//CODE FOR LETTER BUTTON

const letter = document.querySelector(".letterbutton");
letter.addEventListener("click", function () {
  const content = this.nextElementSibling;

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});

//change background color on scroll
//from david deloso's 2020 fall mag
const header = new Waypoint({
  element: document.getElementById("content"),
  handler: function (direction) {
    gsap.to("body", { backgroundColor: "#dbebf0" });
    gsap.to(".nbn-path", { fill: "#2d5355" });
    gsap.to(".sectionheading", { color: "#2d5355" });
    gsap.to(".sectioncontent", { border: "30px solid #2d5355" });
  },
});

const pregameStart = new Waypoint({
  element: document.getElementById("pregame-start"),
  handler: function (direction) {
    gsap.to("body", { backgroundColor: "#ebebeb" });
    gsap.to(".nbn-path", { fill: "#e47d6d" });
    gsap.to(".sectionheading", { color: "#e47d6d" });
    gsap.to(".sectioncontent", { border: "30px solid #e47d6d" });
  },
});
const pregameEnd = new Waypoint({
  element: document.getElementById("pregame-end"),
  handler: function (direction) {
    gsap.to("body", { backgroundColor: "#ebebeb" });
    gsap.to(".nbn-path", { fill: "#e47d6d" });
    gsap.to(".sectionheading", { color: "#e47d6d" });
    gsap.to(".sectioncontent", { border: "30px solid #e47d6d" });
  },
});
const dancefloorStart = new Waypoint({
  element: document.getElementById("dancefloor-start"),
  handler: function (direction) {
    gsap.to("body", { backgroundColor: "#ebebeb" });
    gsap.to(".nbn-path", { fill: "#b46e75" });
    gsap.to(".sectionheading", { color: "#b46e75" });
    gsap.to(".sectioncontent", { border: "30px solid #b46e75" });
  },
});
const dancefloorEnd = new Waypoint({
  element: document.getElementById("dancefloor-end"),
  handler: function (direction) {
    gsap.to("body", { backgroundColor: "#ebebeb" });
    gsap.to(".nbn-path", { fill: "#b46e75" });
    gsap.to(".sectionheading", { color: "#b46e75" });
    gsap.to(".sectioncontent", { border: "30px solid #b46e75" });
  },
});

const featuresStart = new Waypoint({
  element: document.getElementById("features-start"),
  handler: function (direction) {
    gsap.to("body", { backgroundColor: "black" });
    gsap.to(".nbn-path", { fill: "white" });
    gsap.to(".sectionheading", { color: "white" });
    gsap.to(".sectioncontent", { border: "30px solid black" });
  },
});
const featuresEnd = new Waypoint({
  element: document.getElementById("features-end"),
  handler: function (direction) {
    gsap.to("body", { backgroundColor: "black" });
    gsap.to(".nbn-path", { fill: "white" });
    gsap.to(".sectionheading", { color: "white" });
    gsap.to(".sectioncontent", { border: "30px solid black" });
  },
});

const hangover = new Waypoint({
  element: document.getElementById("hangover-start"),
  handler: function (direction) {
    gsap.to("body", { backgroundColor: "#dbebf0" });
    gsap.to(".nbn-path", { fill: "#2d5355" });
    gsap.to(".sectionheading", { color: "#2d5355" });
    gsap.to(".sectioncontent", { border: "30px solid #2d5355" });
  },
});

//LINKS
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
