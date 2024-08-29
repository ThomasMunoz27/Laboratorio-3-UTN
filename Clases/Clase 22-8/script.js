//Traer el btn desde el DOM(document object model)

const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')

const hidden__menu = document.getElementById('hiddenMenu')

openMenu.addEventListener('click', () =>{
    hidden__menu.classList.toggle('hidden')
})

closeMenu.addEventListener('click', () =>{
    hidden__menu.classList.toggle('hidden')
})