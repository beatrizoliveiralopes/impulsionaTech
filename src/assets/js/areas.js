
const {areas} = database;
const conteiner = document.querySelector('.card__container');
conteiner.innerHTML = '';

for (let {imagem, titulo, descricao} of areas)
{
  const areas = document.createElement('div'); 
  areas.classList.add('card__bx');
  areas.innerHTML = 
        ` <div class="card__data">
              <div class="card__icon">
                <img src="../${imagem}" width="83px" height="80px"/>
              </div>
              <div class="card__content">
                <h4>${titulo}</h4>
                <p><b>${descricao}</b></p>
              </div>
            </div>
        </div>`;
  conteiner.appendChild(areas);
}


 
 