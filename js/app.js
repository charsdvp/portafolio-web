import { sending } from './form-email.js'

//  emailjs.init('4ePsQngIxu8xLVte7')

document.addEventListener('click', ( e ) => {
  const btnBurguer = document.querySelector('.container-btn-burguer') 
  const $navbar = document.querySelector('.container-nav-list')
  // Validamos los eventos click
  if(btnBurguer.contains(e.target)) { $navbar.classList.toggle('isActive') }
  if(!btnBurguer.contains(e.target)) { $navbar.classList.remove('isActive') }
})

document.getElementById('form')
  .addEventListener('submit', function(event) {
  event.preventDefault();
  // agregamos el modal y le pasamos el contexto
  sending.bind(this)();
});
