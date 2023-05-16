let menu_abrir = document.querySelector('.menu_abrir')
// console.log(btn_btn)
let navbar = document.querySelector('.navbar')
// console.log(navbar)

menu_abrir.addEventListener('click', ()=>{
    navbar.classList.toggle('navbar_ativo')
})
