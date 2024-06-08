import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearCoctel(evento) {
  evento.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  try {
    await conexionAPI.enviarCoctel(nombre, precio, imagen);
    window.location.href = "../pages/index.html"
  } catch (error) {
    alert(error)
  }

}

formulario.addEventListener("submit", evento => crearCoctel(evento));