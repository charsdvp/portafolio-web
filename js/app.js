document.addEventListener('click', ( e ) => {
  const btnBurguer = document.querySelector('.container-btn-burguer') 
  const $navbar = document.querySelector('.container-nav-list')
  // Validamos los eventos click
  if(btnBurguer.contains(e.target)) { $navbar.classList.toggle('isActive') }
  if(!btnBurguer.contains(e.target)) { $navbar.classList.remove('isActive') }
})
