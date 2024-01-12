const burgerIcon = document.getElementById("burgerIcon");
const modal = document.getElementById("hamb_modal");

function closeModal() {
  if (window.innerWidth > 990) {
    modal.classList.remove("active");
    burgerIcon.classList.remove("active");
  }
}

function toggleModal() {
  modal.classList.toggle("active");
  burgerIcon.classList.toggle("active");
}

burgerIcon.addEventListener("click", toggleModal);

window.addEventListener("resize", closeModal);