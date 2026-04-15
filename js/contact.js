(function () {
    emailjs.init("2SR4Gft5axhHlCnfV");
})();

const textarea = document.getElementById("message");
const form = document.getElementById("form_container");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name_error");
const emailError = document.getElementById("email_error");
const subjectError = document.getElementById("subject_error");
const messageError = document.getElementById("message_error");

const submitMessage = document.getElementById("submit_message");

textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value.trim() === "") {
        nameError.innerHTML = "É obrigatório preencher o nome.";
    } else {
        nameError.innerHTML = "";
    }

    if(emailInput.value.trim() === "") {
        emailError.innerHTML = "É obrigatório preencher o email.";
    } else if(!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.innerHTML = "Por favor, insira um email válido.";
    } else {
        emailError.innerHTML = "";
    }

    if(subjectInput.value.trim() === "") {
        subjectError.innerHTML = "É obrigatório preencher o assunto.";
    } else {
        subjectError.innerHTML = "";
    }

    if(messageInput.value.trim() === "") {
        messageError.innerHTML = "É obrigatório preencher a mensagem.";
    } else {
        messageError.innerHTML = "";
    }

    if(nameInput.value.trim() && emailInput.value.trim() && subjectInput.value.trim() && messageInput.value.trim() &&
       /\S+@\S+\.\S+/.test(emailInput.value)) {
        submitMessage.innerHTML = "Mensagem enviada com sucesso!";
        submitMessage.classList.remove("error");

        emailjs.sendForm("service_teste", "template_k31s2la", "#form_container");

        form.reset();
    } else {
        submitMessage.innerHTML = "Por favor, preencha todos os campos.";
        submitMessage.classList.add("error");
    }

});

