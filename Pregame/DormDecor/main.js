function hide(elem) {
  var x = document.getElementById(elem);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle_visibility(elem) {
  var x = document.getElementById(elem);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function maxwindow(elem) {
  var el = document.getElementById(elem);
  if (el.style.width < "35vw") {
    el.style.width = "35vw";
  } else if (el.className == "column_3") {
    el.style.width = "25vw";
  } else if (el.className == "column_2") {
    el.style.width = "22.5vw";
  } else if (el.className == "column_1") {
    el.style.width = "25vw";
  }
}
