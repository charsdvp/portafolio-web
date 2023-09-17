import { sending } from './form-email.js'

//  emailjs.init('4ePsQngIxu8xLVte7')

document.addEventListener('click', ( e ) => {
  const btnBurguer = document.querySelector('.container-btn-burguer') 
  const $navbar = document.querySelector('.container-nav-list')
  // Validamos los eventos click
  if(btnBurguer.contains(e.target)) { $navbar.classList.toggle('isActive') }
  if(!btnBurguer.contains(e.target)) { $navbar.classList.remove('isActive') }
})

// email
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  // agregamos el modal y le pasamos el contexto
  sending.bind(this)();
});

const colorsBorder = [
  'orangered',
  'rgb(0, 157, 255)',
  'yellow',
  'green',
  'purple',
  'orangered'
];
setInterval(()=>{
  if(window.scrollY >= 650 && window.scrollY <= 1700){          
  const itemsSkill = document.querySelectorAll('.container-about-skill')
  let numberRandom = Math.floor(Math.random() * 6)  
  itemsSkill[numberRandom].style.border = `1px solid ${colorsBorder[numberRandom]}`    
  setTimeout(()=>{
    itemsSkill[numberRandom].style.border = `1px solid #333`    
  },2500)      
  }
}, 3000)
