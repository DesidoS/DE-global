const popupBg = document.querySelector(".popup__bg");
const popup = document.querySelector(".popup");
const openPopupButtons = document.querySelectorAll(".open-popup");
const closePopupButton = document.querySelector(".close-popup");
const cookiesTitles = document.querySelectorAll(".cookies__title");

openPopupButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        for (let i = 0; i < openPopupButtons.length; i++) {
            if (openPopupButtons[i].innerHTML === e.target.innerHTML) {
                cookiesTitles[i].classList.add("active");
            }
        }

        if (window.innerHeight < 632) {
            popup.classList.add("scroll");
        }

        popupBg.classList.add("active");
        popup.classList.add("active");
        document.body.style.overflowY = "hidden";
    });
});

closePopupButton.addEventListener("click", () => {
    hidePopup();
});

document.addEventListener("click", (e) => {
    if (e.target === popupBg) hidePopup();
});

cookiesTitles.forEach((item) => {
    item.addEventListener("click", (e) => {
        cookiesTitles.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

const hidePopup = () => {
    popupBg.classList.remove("active");
    popup.classList.remove("active");

    setTimeout(() => {
        cookiesTitles.forEach((item) => {
            item.classList.remove("active");
        });

        document.body.style.overflowY = "auto";
    }, 250);
};
