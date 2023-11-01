new window.VLibras.Widget('https://vlibras.gov.br/app');

function mostarMenuFluante() {
    let header = document.querySelector('header');
    let menu = document.querySelector('.menu');
    let buttonMenu =  document.querySelector('.button-menu');
    menu.classList.toggle('expanded-menu');
    if(menu.classList.contains('expanded-menu')) {
      header.style.background = 'linear-gradient(145deg, #2D266C 0%, #375ee3 80%)';
      buttonMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      header.style.removeProperty('background');
      buttonMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
} 