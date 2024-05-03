const openModalBtn = document.querySelector("[data-open-modal]");
const closeModalBtn = document.querySelector("[data-close-modal]");
const backdrop = document.querySelector("[data-backdrop]");

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);
backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  document.body.classList.toggle("modal-open");
  backdrop.classList.toggle("is-hidden");
}

function logBackdropClick(e) {
  if (e.target.id === "jsBackdrop") {
    document.body.classList.toggle("modal-open");
    backdrop.classList.toggle("is-hidden");
  }
}

document.querySelector(".js-speaker-form").addEventListener("submit", (e) => {
  e.preventDefault();

  new FormData(e.currentTarget).forEach((value, name) =>
    console.log(`${name}: ${value}`)
  );

  e.currentTarget.reset();
});
