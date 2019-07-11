let mobMenu = document.querySelector('.menu-mobile')

document.querySelector('.header__burger').addEventListener('click', () => {
  mobMenu.style.display = "flex";
})

document.querySelector('.menu-mobile__icon').addEventListener('click', () => {
  mobMenu.style.display = "none";
})