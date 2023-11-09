
const stringEmptyRegex = /^\s*$/;
const emailRegex = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^[0-9]{2}[0-9]{5}[0-9]{4}$/;
const urlRegex = /^(http|https):\/\/[^ "]+$/;

function isEmpty(value) {
  return stringEmptyRegex.test(value);
}
function isValidEmail(email) {
  return emailRegex.test(email);
}
function isValidPhoneNumber(phone) {
return phoneRegex.test(phone);
}
function isValidURL(url) {
  return urlRegex.test(url);
}

function styleIncorrectInput(input, helper, icon) {
  icon.innerText = 'error';
  icon.classList.remove('check-icon');
  icon.classList.add('error-icon');
  helper.classList.add('visible');
  input.classList.remove('correct');
  input.classList.add('incorrect');
}

function styleCorrectInput(input, helper, icon) {
  icon.innerText = 'check_circle';
  icon.classList.remove('error-icon');
  icon.classList.add('check-icon');
  helper.classList.remove('visible');
  input.classList.remove('incorrect');
  input.classList.add('correct');
}

let checkInputs = {
  name: false,
  email: false,
  phone: true,
  site: true,
  message: false
}
let usernameInput = document.getElementById('username');
let usernameHelper = document.getElementById('username-helper');
let usernameIcon = document.getElementById('username-icon');
usernameInput.setAttribute('minlength', '3');
usernameInput.addEventListener('change', (e)=> {
  let value = e.target.value;
  if (isEmpty(value)) {
    checkInputs.name = false;
    usernameHelper.innerText = 'Nome não informado. Campo Obrigatório.';
    return styleIncorrectInput(usernameInput, usernameHelper, usernameIcon);
  }
  if (value.length < 3) {
    checkInputs.name = false;
    usernameHelper.innerText = 'Campo nome precisa ter 3 ou mais caracteres.';
    return styleIncorrectInput(usernameInput, usernameHelper, usernameIcon);
  }
  checkInputs.name = true; 
  return styleCorrectInput(usernameInput, usernameHelper, usernameIcon);
});

let emailInput = document.getElementById('email');
let emailHelper = document.getElementById('email-helper');
let emailIcon = document.getElementById('email-icon');
emailInput.setAttribute('pattern', emailRegex.toString().slice(1, -1));
emailInput.addEventListener('change', (e) => {
  let value = e.target.value;
  if (isEmpty(value)) {
    checkInputs.email = false;
    emailHelper.innerText = 'E-mail não informado. Campo Obrigatório.'
    return styleIncorrectInput(emailInput, emailHelper, emailIcon);
  } 
  if (!isValidEmail(value)) {
    checkInputs.email = false;
    emailHelper.innerText = 'E-mail inválido.'
    return styleIncorrectInput(emailInput, emailHelper, emailIcon);
  }
  checkInputs.email = true;
  return styleCorrectInput(emailInput, emailHelper, emailIcon);
});

let telInput = document.getElementById('tel');
let telHelper = document.getElementById('tel-helper');
let telIcon = document.getElementById('tel-icon');
telInput.setAttribute('pattern', phoneRegex.toString().slice(1, -1));
telInput.addEventListener('change', (e) => {
  let value = e.target.value;
  if(!isEmpty(value) && !isValidPhoneNumber(value)) {
    checkInputs.phone = false;
    telHelper.innerText = 'Número de telefone inválido. Informe apenas números (11 dígitos).';
    return styleIncorrectInput(telInput, telHelper, telIcon);
  }
  checkInputs.phone = true;
  return styleCorrectInput(telInput, telHelper, telIcon);
});

let urlInput = document.getElementById('url');
let urlHelper = document.getElementById('url-helper');
let urlIcon = document.getElementById('url-icon');
urlInput.setAttribute('pattern', urlRegex.toString().slice(1, -1));
urlInput.addEventListener('change', (e) => {
  let value = e.target.value;
  if(!isEmpty(value) && !isValidURL(value)) {
    checkInputs.site = false;
    urlHelper.innerText = 'URL inválida. Informe uma URL válida (http://www.example.com)';
    return styleIncorrectInput(urlInput, urlHelper, urlIcon);
  }
  checkInputs.site = true;
  return styleCorrectInput(urlInput, urlHelper, urlIcon);
});

let messageInput = document.getElementById("message");
let messageHelper = document.getElementById("message-helper");
let messageIcon = document.getElementById('message-icon');
messageInput.setAttribute('minlength', '10');
messageInput.addEventListener('change', (e) => {
  let value = e.target.value;
  if (isEmpty(value)){
    checkInputs.message = false;
    messageHelper.innerText = 'Mensagem não informada. Campo Obrigatório.';
    return styleIncorrectInput(messageInput, messageHelper, messageIcon);
  }
  if (value.length < 10){
    checkInputs.message = false;
    messageHelper.innerText = 'Campo mensagem precisa ter 10 ou mais caracteres.';
    return styleIncorrectInput(messageInput, messageHelper, messageIcon);
  }
  checkInputs.message = true;
  return styleCorrectInput(messageInput, messageHelper, messageIcon);
});

let contactForm = document.getElementById("contact");
contactForm.addEventListener("submit", function (event) {
  if (Object.values(checkInputs).includes(false)) {
    event.preventDefault();
  } else {
    alert('Formulário enviado com sucesso!');
  }
});