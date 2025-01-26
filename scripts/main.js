const headerBarIcon = document.querySelector(".header__bars");
const moblieNavEl = document.querySelector(".moblie--nav");
if (headerBarIcon && moblieNavEl) {
  headerBarIcon.addEventListener("click", () => {
    moblieNavEl.classList.toggle("active");
  });
}
// Handle resizing to ensure correct menu state
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    // Remove active class for larger screens
    moblieNavEl.classList.remove("active");
  }
});

const sunIcon = document.querySelector("#themeswitch");
if (sunIcon) {
  sunIcon.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}
