let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalCont = document.querySelectorAll(".modalContainer")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalCont.style.opacity = "1";
  modalCont.style.visibility = "visible";
  modal.classList.toggle("modalClose");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modalClose");

  setTimeout(function () {
    modalCont.style.opacity = "0";
    modalCont.style.visibility = "hidden";
  }, 500);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalCont) {
    modal.classList.toggle("modalClose");

    setTimeout(function () {
      modalCont.style.opacity = "0";
      modalCont.style.visibility = "hidden";
    }, 500);
  }
});

window.onkeyup = function (e) {
  if (e.keyCode == "27" && modalCont.style.visibility == "visible") {
    modal.classList.toggle("modalClose");

    setTimeout(function () {
      modalCont.style.opacity = "0";
      modalCont.style.visibility = "hidden";
    }, 500);
  }
};
