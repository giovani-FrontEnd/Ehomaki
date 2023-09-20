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