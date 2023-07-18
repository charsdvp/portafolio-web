document.addEventListener('click', ( e ) => { 
  const btnBurguer = document.querySelector('.container-btn-burguer') 
  const $navbar = document.querySelector('.container-nav-list')
  // Validamos los eventos click
  if(btnBurguer.contains(e.target)) { $navbar.classList.toggle('isActive') }
  if(!btnBurguer.contains(e.target)) { $navbar.classList.remove('isActive') }
})

window.addEventListener('scroll', ( e ) => {
  const $navbar = document.querySelector('.container-nav')
  // Validamos y aplicamos el efecto a la barra de navegacion
  window.scrollY > 80 ? $navbar.style.background = '#222' : $navbar.style.background = '#111'  
})