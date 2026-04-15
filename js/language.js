import { translations } from "./translations.js";

let language = localStorage.getItem("language") || "pt";

const btn_pt = document.getElementById("btn_pt");
const btn_en = document.getElementById("btn_en");

function changeLanguage() {
    if(language == 'pt') {

        language = 'en';
        localStorage.setItem("language", language);

        btn_pt.classList.remove("active");
        btn_en.classList.add("active");

    } else {

        language = 'pt';
        localStorage.setItem("language", language);

        btn_en.classList.remove("active");
        btn_pt.classList.add("active");
    }

    setLanguage();

}

function setLanguage() {
    const elements = document.querySelectorAll("[data-i18n]:not(input):not(textarea)");
    const elementsAlt = document.querySelectorAll("[data-i18n], [alt]");
    const elementsPlaceholder = document.querySelectorAll("[data-i18n], [placeholder]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.innerHTML = translations[language][key];
    });

    elementsAlt.forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.alt = translations[language][key];
    });

    elementsPlaceholder.forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.placeholder = translations[language][key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage();

    if(language == 'pt') {
        btn_pt.classList.add("active");
        btn_en.classList.remove("active");
    } else {
        btn_en.classList.add("active");
        btn_pt.classList.remove("active");
    }
});

window.changeLanguage = changeLanguage;