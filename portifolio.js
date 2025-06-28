 
let btnMenu = document.getElementById('btn-menu')
let Menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    Menu.classList.add('abrir-menu')
})
Menu.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
})