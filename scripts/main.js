const headerBarIcon = document.querySelector(".header__bars");
const moblieNavEl = document.querySelector(".moblie--nav");
if (headerBarIcon && moblieNavEl) {
  headerBarIcon.addEventListener("click", () => {
    moblieNavEl.classList.toggle("active");
  });
}
const sunIcon = document.querySelector("#themeswitch");
if (sunIcon) {
  sunIcon.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}
