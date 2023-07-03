const buttonLang = document.querySelectorAll(".lang-button");
const buttonLangLabel = document.querySelectorAll(".lang-button__label");
buttonLang.forEach((button) =>
    button.addEventListener("click", () => {
        window.location.href = "./index-en.html";
        if (window.location.href.includes("en")) {
            window.location.href = "./index.html";
        }
    })
);
