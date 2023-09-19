// START STREET FOOD
let streetFoodMenuBtns = document.querySelectorAll(".menu-btns a");
streetFoodMenuBtns.forEach((streetFoodMenuBtn) => {
  streetFoodMenuBtn.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    MenuBtnsClicks(e);
  });
});

let streetFoodCardsTitles = document.querySelectorAll(
  ".street-food .cards-menu .card-menu .title-card"
);
streetFoodCardsTitles.forEach((streetFoodCard) => {
  streetFoodCard.addEventListener("click", (e) => {
    let card = e.target.parentElement;
    card.classList.toggle("active");
  });
});

let streetFoodCards = document.querySelectorAll(
  ".street-food .cards-menu .card-menu"
);
function MenuBtnsClicks(e) {
  streetFoodCards.forEach((streetFoodCard) => {
    if (e.currentTarget.dataset.streettitle === streetFoodCard.id) {
      streetFoodCard.classList.toggle("active");
    } else {
      streetFoodCard.classList.remove("active");
    }
  });
}
// END STREET FOOD

// START HEADER
let hamburgerIcon = document.getElementById("hamburger-icon");
let listMobile = document.querySelector("header nav ul");

hamburgerIcon.onclick = function () {
  hamburgerIcon.classList.toggle("active");
  listMobile.classList.toggle("active");
};
// END HEADER

// LIST MENU
let tabsBox = document.querySelector(".tabs-box");
let allTabs = document.querySelectorAll(".tab");
let arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = () => {
  let scrollVal = Math.round(tabsBox.scrollLeft);
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth > scrollVal ? "flex" : "none";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabsBox.scrollLeft += icon.id === "left" ? -100 : 100;
    setTimeout(() => handleIcons(), 50);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
    tabsClick(e);
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons();
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mouseup", dragStop);


// START CARDS MENU
let titlesCards = document.querySelectorAll(
  ".sushi-menus .cards-menu .card-menu .title-card"
);
titlesCards.forEach((titleCard) => {
  titleCard.addEventListener("click", (e) => {
    console.log(e.target)
    let parentTarget = e.target.parentElement;
    parentTarget.classList.toggle("active");
    console.log(parentTarget)
  });
});

titlesCards.forEach((titleCard) => {
  titleCard.addEventListener("click", (e) => {
    let parentTarget = e.target.parentElement.parentElement;
    parentTarget.classList.toggle("active");
  });
});

let cardsMenu = document.querySelectorAll(
  ".sushi-menus .cards-menu .card-menu"
);
function tabsClick(e) {
  cardsMenu.forEach((cardMenu) => {
    if (e.target.dataset.title === cardMenu.id) {
      cardMenu.classList.toggle("active");
    } else {
      cardMenu.classList.remove("active");
    }
  });
}
// END CARDS MENU
