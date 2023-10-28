// START HEADER
let hamburgerIcon = document.getElementById("hamburger-icon");
let listMobile = document.querySelector("header nav ul");

hamburgerIcon.onclick = function () {
  hamburgerIcon.classList.toggle("active");
  listMobile.classList.toggle("active");
};
// END HEADER