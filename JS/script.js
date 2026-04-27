

const numero = document.getElementById("numero");
const btnAumentar = document.getElementById("aumentar");
const btnDisminuir = document.getElementById("disminuir");

let contador = 0;

// función para cambiar color según valor
function actualizarColor() {
  if (contador > 0) {
    numero.style.color = "green";
  } else if (contador < 0) {
    numero.style.color = "red";
  } else {
    numero.style.color = "black";
  }
}

// sumar
btnAumentar.addEventListener("click", () => {
  contador++;
  numero.textContent = contador;
  actualizarColor();
});

// restar
btnDisminuir.addEventListener("click", () => {
  contador--;
  numero.textContent = contador;
  actualizarColor();
});