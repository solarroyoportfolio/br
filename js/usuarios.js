document.addEventListener('DOMContentLoaded', function() {
    let nombre = localStorage.getItem("username");
    if (nombre == "sol") {
        let encabezado = document.getElementById("Encabezado");
        encabezado.innerHTML = "<img src='/img/sol.png' alt='Imagen-sol' style='width:70px; border-radius:50%''> Hola " + nombre + " 👋🏽";
      }

    else{
      let encabezado = document.getElementById("Encabezado");
      encabezado.innerHTML = "<img src=' /img/"+nombre+".png' alt='Imagen-usuario' style='width:70px; border-radius:50%''> Hola " + nombre + " 👋🏽";
    }
  });