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

function getPersonas() {
  loader.classList.remove("oculto");
  // Si yo no hago nada el objeo axios hace un get.
  axios
    .get(URL)
    .then((res) => {
      const { data } = res;
      // console.log(res.data);
      console.log(data);
    })
    .catch((e) => {
      console.error(e.message);
    })
    .finally(() => {
      loader.classList.add("oculto");
    });
}
function getPersona(id) {
  loader.classList.remove("oculto");
  // Si yo no hago nada el objeo axios hace un get.
  axios
    .get(URL + "/" + id)
    .then((res) => {
      const { data } = res;
      // console.log(res.data);
      console.log(data);
    })
    .catch((e) => {
      console.error(e.message);
    })
    .finally(() => {
      loader.classList.add("oculto");
    });
}
function postPersona() {
  // harcodeado
  new_persona = {
    nombre: "Ruben",
    apellido: "Lopez",
    edad: 30,
  };
  loader.classList.remove("oculto");
  // Si yo no hago nada el objeo axios hace un get.
  axios
    .post(URL, new_persona)
    .then((res) => {
      const { data } = res;
      // console.log(res.data);
      console.log(data);
    })
    .catch((e) => {
      console.error(e.message);
    })
    .finally(() => {
      loader.classList.add("oculto");
    });
}
function deletPersona(id) {
  loader.classList.remove("oculto");
  // Si yo no hago nada el objeo axios hace un get.
  axios
    .delete(URL + "/" + id)
    .then((res) => {
      const { data } = res;
      console.log(data);
    })
    .catch((e) => {
      console.error(e.message);
    })
    .finally(() => {
      loader.classList.add("oculto");
    });
}
function updatePersona() {
  // harcodeado
  updatedPersona = {
    id: 21,
    nombre: "Manuel",
    apellido: "Lopez",
    edad: 12,
  };
  loader.classList.remove("oculto");
  // Si yo no hago nada el objeo axios hace un get.
  axios
    .put(URL, updatedPersona.id, updatedPersona)
    .then((res) => {
      const { data } = res;
      // console.log(res.data);
      console.log(data);
    })
    .catch((e) => {
      console.error(e.message);
    })
    .finally(() => {
      loader.classList.add("oculto");
    });
}
