// window.addEventListener("DOMContentLoaded")

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

// function getPersonas() {
//   loader.classList.remove("oculto");
//   // nos devuelve una promesa, en vez de un callback.
//   // si no le pongo parametros manda automaticam un GET.
//   // Ahora la peticion va a ser a la URL, en vez de GET.
//   fetch(URL)
//     .then((res) => {
//       if (res.ok == true) {
//         // tambien devuelve una promesa.
//         // que devuelve el body parseado.
//         // como la retorno la capturo en el proximo then.
//         return res.json();
//       } else {
//         //promesa rechazada (para capturarla en el catch)
//         return Promise.reject(res);
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((res) => {
//       console.error(`Error ${res.status}: ${res.statusText}`);
//     })
//     .finally((res) => {
//       loader.classList.add("oculto");
//     });
// }

// OPCION B (es lo mismo)
async function getPersonas() {
  loader.classList.remove("oculto");
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw res;
    }
    const data = await res.json();
    console.log(data);
  } catch (res) {
    console.error(`Error ${res.status}: ${res.statusText}`);
  } finally {
    loader.classList.add("oculto");
  }
}

// // OPCION C (es lo mismo)
// const getPersonas = async () => {
//   loader.classList.remove("oculto");
//   try {
//     const res = await fetch(URL);
//     if (!res.ok) {
//       throw res;
//     }
//     const data = await res.json();
//     console.log(data);
//   } catch (res) {
//     console.error(`Error ${res.status}: ${res.statusText}`);
//   } finally {
//     loader.classList.add("oculto");
//   }
// };

async function getPersona(id) {
  loader.classList.remove("oculto");
  try {
    const res = await fetch(URL + "/" + id);
    if (!res.ok) {
      throw res;
    }
    const data = await res.json();
    console.log(data);
  } catch (res) {
    console.error(`Error ${res.status}: ${res.statusText}`);
  } finally {
    loader.classList.add("oculto");
  }
}
function postPersonas() {
  // harcodeado nueva persona.
  new_persona = {
    nombre: "Lucia",
    apellido: "Garcia",
    edad: 25,
  };
  loader.classList.remove("oculto");
  // Como segundo param pide un objeto config
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(new_persona),
  })
    .then((res) => {
      if (res.ok == true) {
        return res.json();
      } else {
        //promesa rechazada (para capturarla en el catch)
        return Promise.reject(res);
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((res) => {
      console.error(`Error ${res.status}: ${res.statusText}`);
    })
    .finally(() => {
      loader.classList.add("oculto");
    });
}

function deletePersona(id) {
  loader.classList.remove("oculto");
  fetch(URL + "/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok == true) {
        return res.json();
      } else {
        //promesa rechazada (para capturarla en el catch)
        return Promise.reject(res);
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((res) => {
      console.error(`Error ${res.status}: ${res.statusText}`);
    })
    .finally(() => {
      loader.classList.add("oculto");
    });
}
function updatePersona() {
  // harcodeado nueva persona.
  updatedPersona = {
    id: 22,
    nombre: "Lucia",
    apellido: "Garcia",
    edad: 25,
  };
  loader.classList.remove("oculto");
  // Como segundo param pide un objeto config
  fetch(URL + "/" + updatedPersona.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(updatedPersona),
  })
    .then((res) => {
      if (res.ok == true) {
        return res.json();
      } else {
        //promesa rechazada (para capturarla en el catch)
        return Promise.reject(res);
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((res) => {
      console.error(`Error ${res.status}: ${res.statusText}`);
    })
    .finally(() => {
      loader.classList.add("oculto");
    });
}

/*

SERVER

El servidor le da al cliente los documentos html css, php, js, etc.
El servidor en este caso es LIVE-SERVER.


API

DB

Cliente
Hace peticiones Ajax, fetch y axus a la API.
Al servidor JSON-SERVER.

CDN
Content Delivery NetWork.

*/
