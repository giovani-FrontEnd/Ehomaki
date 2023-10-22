const tabs = document.querySelectorAll('.scrollable-tabs-container a')
const righArrow = document.querySelector('.scrollable-tabs-container .right-arrow i')
const leftArrow = document.querySelector('.scrollable-tabs-container .left-arrow i')


const tabsList = document.querySelector('.scrollable-tabs-container ul')
const leftArrowContainer = document.querySelector('.scrollable-tabs-container .left-arrow')
const rightArrowContainer = document.querySelector('.scrollable-tabs-container .right-arrow')

const removeAllActiveClasses = () => {
  tabs.forEach(tab => {
    tab.classList.remove('active')
  })
}

let cardsMenu = document.querySelectorAll(
  ".sushi-menus .cards-menu .card-menu"
  );
  
function tabsClick(e) {
  cardsMenu.forEach((cardMenu) => {
    if (e.target.dataset.title === cardMenu.id) {
      cardMenu.classList.add("active");
    } else {
      cardMenu.classList.remove("active");
    }
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    removeAllActiveClasses()
    tab.classList.add('active');
    tabsClick(e)
  })
})

const manageIcons = () => {
  if(tabsList.scrollLeft >= 5) {
    leftArrowContainer.classList.add('active');
  } else{
    leftArrowContainer.classList.remove('active');
  }

  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 5
  
  if(tabsList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove('active');
  } else{
    rightArrowContainer.classList.add('active');
  }
}

righArrow.addEventListener('click', () => {
  tabsList.scrollLeft += 200;
  manageIcons();
})

leftArrow.addEventListener('click', () => {
  tabsList.scrollLeft -= 200;
  manageIcons();
})

tabsList.addEventListener('scroll', manageIcons)

let dragging = false;

tabsList.addEventListener('mousedown', () => {
  dragging = true;
})

const drag = (e) => {
  if(!dragging) return;
  tabsList.classList.add('dragging')
  tabsList.scrollLeft -= e.movementX;
}

tabsList.addEventListener('mouesmove', drag)

document.addEventListener('mouseup', () => {
  dragging = false
  tabsList.classList.remove('dragging')
})

// START CARDS MENU
let titlesCards = document.querySelectorAll(
  ".sushi-menus .cards-menu .card-menu .title-card"
);
titlesCards.forEach((titleCard) => {
  titleCard.addEventListener("click", (e) => {
    let parentTarget = e.target.parentElement;
    parentTarget.classList.toggle("active");
  });
});

titlesCards.forEach((titleCard) => {
  titleCard.addEventListener("click", (e) => {
    let parentTarget = e.target.parentElement.parentElement;
    parentTarget.classList.toggle("active");
  });
});


// END CARDS MENU