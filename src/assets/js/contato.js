document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contact");
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var tel = document.getElementById("tel");
  var url = document.getElementById("url");
  var textarea = document.getElementById("textarea");

  contactForm.addEventListener("submit", function (event) {
      var isValid = true;

      if (username.value.trim() === "") {
          displayError(username, "Por favor, preencha seu nome.");
          isValid = false;
      }

      if (!isValidEmail(email.value)) {
          displayError(email, "Por favor, insira um e-mail válido.");
          isValid = false;
      }

      if (!isValidPhoneNumber(tel.value)) {
          displayError(tel, "Por favor, insira um número de telefone válido (10 dígitos).");
          isValid = false;
      }

      if (url.value.trim() !== "" && !isValidURL(url.value)) {
          displayError(url, "Por favor, insira uma URL válida (http://www.example.com).");
          isValid = false;
      }

      if (textarea.value.trim() === "") {
          displayError(textarea, "Por favor, escreva sua mensagem.");
          isValid = false;
      }

      if (!isValid) {
          event.preventDefault();
      }
  });

  function isValidEmail(email) {
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return email.match(emailRegex);
  }

  function isValidPhoneNumber(phone) {
      var phoneRegex = /^\d{10}$/;
      return phone.match(phoneRegex);
  }

  function isValidURL(url) {
      var urlRegex = /^(http|https):\/\/[^ "]+$/;
      return url.match(urlRegex);
  }

  function displayError(input, message) {
      var parentField = input.parentElement;
      var errorIcon = parentField.querySelector("i.fa-exclamation-circle");
      var errorMessage = parentField.querySelector("small");

      input.classList.add("error");
      input.classList.remove("valid");
      errorIcon.style.visibility = "visible";
      errorMessage.textContent = message;
  }
});