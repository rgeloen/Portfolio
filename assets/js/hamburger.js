const menu = document.querySelector('.nav')
const hamburger = menu.querySelector('.hamburger')

const menuToggle = () =>{
    hamburger.classList.toggle("change")
    menu.classList.toggle("active")
}
