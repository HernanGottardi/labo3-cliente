/*

Implementa la asincronia con callbacks
--------------------------------------

*/

document.getElementById("btnGetPersonas").addEventListener("click", () => {
  getPersonas();
});

document.getElementById("btnGetPersona").addEventListener("click", () => {
  getPersona();
});

document.getElementById("btnPostPersona").addEventListener("click", () => {
  postPersona();
});

document.getElementById("btnDeletePersona").addEventListener("click", () => {
  deletePersona();
});

document.getElementById("btnUpdatePersona").addEventListener("click", () => {
  updatePersona();
});

const loader = document.querySelector("#loader");
const URL = "http://localhost:3000/personas";

function getPersonas() {
  // peticion/request
  const xhr = new XMLHttpRequest();

  loader.classList.remove("oculto");
  // 1. Setear el evento ready-state-change
  // Cuando el estado vale 4 significa que ya recibimos respuesta del servidor.
  // Es lo unico estado que nos importa (4-Done).

  //   xhr.onreadystatechange = () => {};
  xhr.addEventListener("readystatechange", () => {
    // Respuesta final
    if (xhr.readyState == 4) {
      // respuesta exitosa (!= error 404)
      if (xhr.status >= 200 && xhr.status < 300) {
        // lo que responde el servidor (texto en formato json)
        const listaData = JSON.parse(xhr.responseText);
        console.log(listaData);
      } else {
        console.error(`Error ${xhr.status}: ${xhr.statusText}`);
      }

      // independientemente de como haya ido todo:
      loader.classList.add("oculto");
    }
  });

  // 2. Open de la peticion (se configura).
  // URL es la variable que cree.
  // tercera parametro, si no ponemos nada es True para que sea asincrona
  xhr.open("GET", URL, true);

  // 3. Enviar la peticion.
  // No tiene nada q ver con el servidor.
  // Seria un error del lado del cliente.
  try {
    xhr.send();
  } catch (e) {
    console.error(e);
  }
}

function getPersona(id) {
  // peticion/request
  const xhr = new XMLHttpRequest();

  loader.classList.remove("oculto");
  // 1. Setear el evento ready-state-change
  // Cuando el estado vale 4 significa que ya recibimos respuesta del servidor.
  // Es lo unico estado que nos importa (4-Done).

  //   xhr.onreadystatechange = () => {};
  xhr.addEventListener("readystatechange", () => {
    // Respuesta final
    if (xhr.readyState == 4) {
      // respuesta exitosa (!= error 404)
      if (xhr.status >= 200 && xhr.status < 300) {
        // lo que responde el servidor (texto en formato json)
        const listaData = JSON.parse(xhr.responseText);
        console.log(listaData);
      } else {
        console.error(`Error ${xhr.status}: ${xhr.statusText}`);
      }

      // independientemente de como haya ido todo:
      loader.classList.add("oculto");
    }
  });

  // 2. Open de la peticion (se configura).
  // URL es la variable que cree.
  // tercera parametro, si no ponemos nada es True para que sea asincrona
  xhr.open("GET", URL + `${id}`, true);

  // 3. Enviar la peticion.
  // No tiene nada q ver con el servidor.
  // Seria un error del lado del cliente.
  try {
    xhr.send();
  } catch (e) {
    console.error(e);
  }
}

function postPersona() {
  // harcodeado
  new_persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
  };

  const xhr = new XMLHttpRequest();

  loader.classList.remove("oculto");

  xhr.addEventListener("readystatechange", () => {
    // Respuesta final
    if (xhr.readyState == 4) {
      // respuesta exitosa (!= error 404)
      if (xhr.status >= 200 && xhr.status < 300) {
        // lo que responde el servidor (texto en formato json)
        const listaData = JSON.parse(xhr.responseText);
        console.log(listaData);
      } else {
        console.error(`Error ${xhr.status}: ${xhr.statusText}`);
      }

      // independientemente de como haya ido todo:
      loader.classList.add("oculto");
    }
  });

  // 2
  xhr.open("POST", URL, true);

  // seteo la cabecera de la peticion.
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  //3
  try {
    xhr.send(JSON.stringify(new_persona));
  } catch (e) {
    console.error(e);
  }
}
function deleteersona() {}
function updatePersona() {}

/**
 * 
 * 
 * API:
 *
 * conjunto de funciones/metodos
 *
 * REST:
 *
 * Hace q las peticiones no guarden estado.
 * Para que cuando mandamos una peticion al servidor
 * no mantenemos una sesion abierta.
 *
 * EL CONJUNTO:
 *
 * Las peticiones q mandamos son independientes una de otras.
 * 
 * verbos:
 * 
 * GET (no modifica el servidor, es de lectura, un select de una DB)
 * 
 * POST (nuevo elem), DELETE, 
 * UPDATE (actualizamos instancia del elem)
 * 
 * Ejemplo: Estoy enviando un ID, nombre, apellido, edad
 * Entonces va a actualizar todo lo que se lleve, todos los campos.
 * Mando la actualizacion
 * 
 * PATCH (). 
 * Solo paso el valor que necesito cambiar, ejemplo el nombre
 * pero no se actualizo todo lo demas (poco usado).
 * 
 * (Todos estos modifican el servidor, menos el get)
 



*/
