let button = document.querySelector('.burger')
let nav = document.querySelector('.nav-links')

button.addEventListener('click', navSlide)


function navSlide() {
    nav.classList.toggle('navSlide')
}