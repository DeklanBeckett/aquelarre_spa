function crear(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let number = document.getElementById("number")
    let url = "https://aquelarre-data-base.glitch.me/users"

    let cita = {
        name: name.value,
        numero : number.value,
        email :email.value,
        citas : []
    }
    fetch('https://aquelarre-data-base.glitch.me/users', { // URL actualizada para obtener datos
    method: 'POST',
    body: JSON.stringify(cita), // 'cita' es el objeto que estás enviando como datos
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert("Funcionó"); // Muestra una alerta si la solicitud es exitosa
  })
  .catch(error => {
    console.error('Error:', error); // Muestra el error en la consola si la solicitud falla
  })

}

fetch("https://aquelarre-data-base.glitch.me/users").then(r=>r.json())
then()