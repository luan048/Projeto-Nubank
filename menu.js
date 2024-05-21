let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{ // Quando clicar na lista tudo abrir
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{ //Quando clicar em algo, tudo fechar
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{ // Para quando clicar fora, tudo fechar
    menu.classList.remove('abrir-menu')
})