function mostarMenuFluante() {
  let header = document.querySelector('header');
  let menu = document.querySelector('.menu');
  let buttonMenu =  document.querySelector('.button-menu');
  menu.classList.toggle('expanded-menu');
  if(menu.classList.contains('expanded-menu')) {
    header.style.background = 'linear-gradient(145deg, #2D266C 0%, #375ee3 80%)';
    buttonMenu.innerHTML = '<i class="material-symbols-rounded">close</i>';
  } else {
    header.style.removeProperty('background');
      buttonMenu.innerHTML = '<i class="material-symbols-rounded">menu</i>';
    }
} 

const buttonMenu = document.querySelector('.button-menu');
buttonMenu.addEventListener('click', mostarMenuFluante);

new window.VLibras.Widget('https://vlibras.gov.br/app');