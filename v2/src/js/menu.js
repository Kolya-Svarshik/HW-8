const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

menuBtnRef.addEventListener("click", () => {
  menuBtnRef.classList.toggle("is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);

  mobileMenuRef.classList.toggle("is-open");
});
