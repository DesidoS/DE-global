const cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)cookieConsent\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
);

if (!cookieValue) {
    const cookiesRef = document.querySelector(".cookies-wrapper");
    const cookiesBtn = document.querySelector(".cookies-wrapper__accept");
    const cookiesBtnClose = document.querySelector(".cookies-wrapper__close");
    const cookiesBtnDecline = document.querySelector(
        ".cookies-wrapper__decline"
    );

    cookiesRef.classList.add("active");

    cookiesBtn.addEventListener("click", () => {
        document.cookie =
            "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

        hideCookies();
    });

    cookiesBtnClose.addEventListener("click", () => hideCookies());

    cookiesBtnDecline.addEventListener("click", () => hideCookies());

    const hideCookies = () => {
        cookiesRef.style.transform = "translateY(150%)";
        setTimeout(() => {
            cookiesRef.classList.remove("active");
        }, 500);
    };
}
