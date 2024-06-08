async function listarcocteles() {
  const conexion = await fetch("http://localhost:3001/cocteles");

  const conexionConvertida = conexion.json();

  console.log(conexionConvertida);
  return conexionConvertida

}

async function enviarCoctel(nombre, precio, imagen) {
  const conexion = await fetch("http://localhost:3001/cocteles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen
    })
  })

  const conexionConvertida = conexion.json();

  if (!conexion.ok) {
    throw new Error("Ha ocurrido un error al enviar el video");
  }

  return conexionConvertida;
}

export const conexionAPI = {
  listarcocteles,
  enviarCoctel
}