function criarItemSliderAreas({
  imagem,
  titulo,
  area
}) {
  const slideItem = document.createElement('div');
  slideItem.setAttribute('role', 'button');
  slideItem.classList.add('slider-item', 'tecnology-areas-slider-item');

  slideItem.innerHTML = `
    <div class="slider-item-image" style="background-image: url(${!!imagem ? imagem : imgPadraoAreas });"></div>
    <div class="slider-item-information">
      <h3 class="slider-item-title" title="${titulo}">${titulo}</h3>
      <div class="slider-item-descrition tecnology-areas-descrition">
        <span>${area ?? ''}</span>
      </div>
    </div>
  `;

  return slideItem;
}

function criarItemSliderCursos({
  imagem,
  titulo,
  nivel,
  cargaHoraria,
  comCertificado,
  link
}) {
  const slideItem = document.createElement('div');
  slideItem.setAttribute('role', 'button');
  slideItem.classList.add('slider-item', 'course-slider-item');

  slideItem.innerHTML = `
    <div class="slider-item-image" style="background-image: url(${!!imagem ? imagem : imgPadraoCurso});"></div>
    <div class="slider-item-information">
      <h3 class="slider-item-title" title="${titulo}">${titulo}</h3>
      <div class="slider-item-descrition course-descrition">
        <div class="course-level-description">
          <i class="material-symbols-rounded">signal_cellular_alt</i>
          <span>${nivel ?? ''}</span>
        </div>
        <div class="vertical-line"></div>
        <div class="course-workload-description">
          <i class="material-symbols-rounded">schedule</i>
          <span>${cargaHoraria ?? ''}</span>
        </div>
        <div class="vertical-line" ${comCertificado ? 'style= "display: none";' : ''}></div>
        <div class="course-certificate-description" ${comCertificado ? 'style= "display: none";' : ''};">
          <i class="material-symbols-rounded">new_releases</i>
          <span>Certifcado</span>
        </div>
      </div>
    </div>
  `;

  slideItem.addEventListener('click', () => {
    window.open(link, '_blank');
  });

  return slideItem;
}

function criarItemSliderVagas({
  imagem,
  titulo,
  nivel,
  salario,
  local,
  link
}) {
  const slideItem = document.createElement('div');
  slideItem.setAttribute('role', 'button');
  slideItem.classList.add('slider-item', 'job-slider-item');

  slideItem.innerHTML = `
    <div class="slider-item-image" style="background-image: url(${!!imagem ? imagem : imgPadraoVargas});"></div>
    <div class="slider-item-information">
      <h3 class="slider-item-title" title="${titulo}">${titulo}</h3>
      <div class="slider-item-descrition job-descrition">
        <div class="job-salary-description">
          <i class="material-symbols-rounded">attach_money</i>
          <span>${salario}</span>
        </div>
        <div class="vertical-line"></div>
        <div class="job-location-description">
          <i class="material-symbols-rounded">location_on</i>
          <span>${local}</span>
        </div>
        <div class="vertical-line"></div>
        <div class="job-position-description">
          <i class="material-symbols-rounded">person</i>
          <span>${nivel}</span>
        </div>
      </div>
    </div>
  `;

  slideItem.addEventListener('click', () => {
    window.open(link, '_blank');
  });

  return slideItem;
}

function carregarItensCarrosel(carrossel, tipo, maxItens) {
  const itens = database[tipo];
  const qtdItens = itens.length <= maxItens ? itens.length : maxItens;
  const criarSlideItem = {
    areas: criarItemSliderAreas,
    cursos: criarItemSliderCursos,
    vagas: criarItemSliderVagas
  }

  const slider = document.createElement('div')
  slider.classList.add('slider');
  slider.style.transform = 'translateX(0px)';
  if(qtdItens > 0) {
    for(let i = 0; i < qtdItens ; i++) {
      const element = criarSlideItem[tipo](itens[i]);
      slider.appendChild(element);
    }
  }

  const sliderWrpper = document.createElement('div');
  sliderWrpper.classList.add('slider-wrapper');
  sliderWrpper.appendChild(slider);

  const btnItemAterior = document.createElement('button');
  btnItemAterior.classList.add('prev-item-button');
  btnItemAterior.setAttribute('arial-label', 'Item anterior');
  btnItemAterior.innerHTML = '<i class="material-symbols-rounded">navigate_before</i>';
  const btnProximoItem = document.createElement('button');
  btnProximoItem.classList.add('next-item-button');
  btnProximoItem.setAttribute('arial-label', 'Próximo item');
  btnProximoItem.innerHTML = '<i class="material-symbols-rounded">navigate_next</i>';

  carrossel.append(btnItemAterior, btnProximoItem, sliderWrpper);

  let xInicial = 0;
  let deltaX = 0;
  let deslocamentoX = 0;
  const tamanhoTela = window.innerWidth;
  const tamanhoItemSlider = window.innerWidth > 576 ? 412 : 332;
  const comprimetoSlider = (qtdItens * tamanhoItemSlider);
  const minDeslocamento = 0;
  const maxDeslocamento = tamanhoTela - 160 -  comprimetoSlider; 

  const deslocarSlider = (deslocamento) => {
    if(deslocamento > minDeslocamento) {
      deslocamento = minDeslocamento
    } else if(deslocamento < maxDeslocamento) {
      deslocamento = maxDeslocamento
    }
    slider.style.transform = `translateX(${deslocamento}px)`;
    slider.style.transition = 'transform 300ms';
  }

  slider.addEventListener('touchstart', (e)=> {
    xInicial = e.targetTouches[0].clientX;
    deltaX = 0;
  });
  slider.addEventListener('touchmove',   (e) => {
    deltaX = e.targetTouches[0].clientX - xInicial;
    deslocarSlider(deslocamentoX + deltaX);
  });
  slider.addEventListener('touchend', (e) => {
    const qtdItensArrastados = Math.round(Math.abs(deltaX / tamanhoItemSlider));
    if(deltaX > 0) {
      deslocamentoX += tamanhoItemSlider * qtdItensArrastados;
    }else {
      deslocamentoX -= tamanhoItemSlider * qtdItensArrastados;
    }
    deslocarSlider(deslocamentoX);
  });

  btnProximoItem.addEventListener('click', () => {
    if(deslocamentoX > maxDeslocamento){
      deslocamentoX -= tamanhoItemSlider;
      deslocarSlider(deslocamentoX);
    }
  });
  btnItemAterior.addEventListener('click', () => {
    if(deslocamentoX < minDeslocamento){
      deslocamentoX += tamanhoItemSlider;
      deslocarSlider(deslocamentoX);
    }
  });
}

const carrosselDeCursos = document.getElementById("courses-carousel");
carrosselDeCursos.innerHTML = '';
carregarItensCarrosel(carrosselDeCursos, 'cursos', 10);
const carrosselDeVagas = document.getElementById("jobs-carousel");
carrosselDeVagas.innerHTML = '';
carregarItensCarrosel(carrosselDeVagas, 'vagas', 10);
const carrosselDeAreas = document.getElementById("tecnology-areas-carousel");
carrosselDeAreas.innerHTML = '';
carregarItensCarrosel(carrosselDeAreas, 'areas', 10);