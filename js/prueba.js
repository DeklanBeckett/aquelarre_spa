
// funcion para crear un usuario
function crear() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let url = "https://covenspa-3528f-default-rtdb.firebaseio.com/users.json";

  let newUser = {
    name: name,
    numero: number,
    email: email,
    citas: [
      {
        date: "",
        type: "",
        notes: ""
      }
    ]
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert("cita creada")
    location.href =""
  })
  .catch(error => {
    console.error('Error al crear el usuario:', error);
  }); 
}



//traer datos de la api del spa

let row = document.getElementById("row");
fetch("https://covenspa-3528f-default-rtdb.firebaseio.com/users.json")
  .then(r => r.json()).then(data => {
    for (const key in data) {
      console.log(key, data[key]);
      // Obtener el nombre del usuario
      const userName = data[key].name;
      const usernumber = data[key].numero;
      // Añadir el nombre al HTML
      row.innerHTML += `
      <div class="col-md-3">
            <div class="card">
                <div><div class="card-body">
                    <h1>${userName}</h1>
                    <p>${usernumber}</p>
                </div></div>
      </div>
      `
    }
  });



  // function eliminarPrimerRegistro() {
  //   const url = "https://covenspa-3528f-default-rtdb.firebaseio.com/users/-NsK-aPWk1BZXzQo9AxB";
  
  //   fetch(url, {
  //     method: 'DELETE'
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       console.log("El primer registro ha sido eliminado exitosamente.");
  //     } else {
  //       console.log("No se pudo eliminar el primer registro.");
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error al intentar eliminar el primer registro:', error);
  //   });
  // }