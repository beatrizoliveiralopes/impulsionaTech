const {cursos} = database;
const {areas} = database;

const group = document.querySelector("#group");
group.innerHTML = '';


group.innerHTML = 
            `<div class="radio-container">
               <label for="todos">
                   <input type="radio" name="selector" value="todos" id="todos" checked>
                      <div class="custom-radio">
                         <span></span>
                      </div>
                      <span>TODOS</span>
               </label>
            </div>`
                + areas.map((a) => 
             `<div class="radio-container">
                <label for="${a.titulo}">
                  <input type="radio" name="selector" value="${a.titulo}" id="${a.titulo}">
                    <div class="custom-radio">
                         <span></span>
                    </div>
                    <span>${a.titulo}</span>
                </label>
                </div>`).join(' ');

document.querySelector('#output').innerText = ` `;          
var cardCursos = document.querySelector('.section_cards');
cardCursos.innerHTML = '';
for (let {imagem, titulo, nivel, cargaHoraria, comCertificado, link, area} of cursos)
    {
        const curso = document.createElement('div'); 
        curso.classList.add('card');
  
        curso.innerHTML = 
                        `<img src="${imagem}" width="100px" height="110px" alt="${titulo}">
                         <h3>${titulo}</h3>
                         <div class="descricao_curso">
                                <p>Nível: ${nivel}</p>
                                <p>Carga Horária: ${cargaHoraria}</p>
                                <a href="${link}">Leia Mais</a>
                         </div>`;  
                    cardCursos.appendChild(curso);  
    }
// add an event listener for the change event
const radioButtons = document.querySelectorAll('input[name="selector"]');
     
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
}        
        
function showSelected(e) {  
      document.querySelector('#output').innerText = ` `;          
      if (this.checked) {         
          var cursoFiltro = cursos.filter((c) => c.area == `${this.value}`);                

          var cardCursos = document.querySelector('.section_cards');
          cardCursos.innerHTML = '';
          console.log(this.value);
          if(this.value=='todos'){
                for (let {imagem, titulo, nivel, cargaHoraria, comCertificado, link, area} of cursos)
                {
                   const curso = document.createElement('div'); 
                   curso.classList.add('card');

                   curso.innerHTML = 
                        `<img src="${imagem}" width="100px" height="110px" alt="${titulo}">
                           <h3>${titulo}</h3>
                           <div class="descricao_curso">
                              <p>Nível: ${nivel}</p>
                              <p>Carga Horária: ${cargaHoraria}</p>
                              <a href="${link}">Leia Mais</a>
                           </div>`;  
                    cardCursos.appendChild(curso);  
                 }
          }
          else{
                  for (let  {imagem, titulo, nivel, cargaHoraria, comCertificado, link, area} of cursoFiltro)
                  {
                      const cursoFiltro = document.createElement('div'); 
                      cursoFiltro.classList.add('card');
    
                      cursoFiltro.innerHTML = 
                          `<img src="${imagem}" width="100px" height="110px" alt="${titulo}">
                              <h3>${titulo}</h3>
                              <div class="descricao_curso">
                                <p>Nível: ${nivel}</p>
                                <p>Carga Horária: ${cargaHoraria}</p>
                                <a href="${link}">Leia Mais</a>
                              </div>`;  
                      cardCursos.appendChild(cursoFiltro);  
                  }
              }
            }
        }      
 
  