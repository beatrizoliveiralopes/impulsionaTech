 const {membros} = database;
 const divCards = document.querySelector('.sub-card');
 divCards.innerHTML = '';
 for (let {nome,descricao,linkedin,github,foto} of membros){
   const card = document.createElement('div'); 
   card.classList.add('teams');
   card.innerHTML = 
        `<img class="img-card" src= "${foto}" alt="Imagem da ${nome}">
        <h2 class="name">${nome}</h2>
        <div class="about">
          <p>${descricao}</p>
        </div>
        <div class="social-links">
          <a href="${linkedin}" alt="linkedin ${nome}" target="_blank"><i
              class="fa fa-linkedin-square" style="font-size:36px;color:#1c5ece"></i></a>
          <a href="${github}" alt="github ${nome}"><i class="fa fa-github" style="font-size:36px"></i></a>
        </div>`;
    divCards.appendChild(card);

 }


  
  