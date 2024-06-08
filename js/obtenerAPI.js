import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(nombre, precio, imagen) {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="card">
      <img src="${imagen}" alt="${nombre}">
      <div class="descripcion">
        <div class="nombre-precio">
          <p>${nombre}</p>
          <p>$${precio}</p>
        </div>
        <span class="material-symbols-outlined">delete</span>
      </div>
    </div>
  `
  return card;
}

async function listarcocteles() {

  console.log(conexionAPI);

  try {
    const listaAPI = await conexionAPI.listarcocteles();
    listaAPI.forEach(coctel => lista.appendChild(crearCard(coctel.nombre, coctel.precio, coctel.imagen)));
  } catch (error) {
    lista.innerHTML = '<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion</h2>'
  }
} 

listarcocteles();