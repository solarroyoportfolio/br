document.addEventListener('DOMContentLoaded', function() {
    let nombre = localStorage.getItem("username");
    if (nombre == "sol") {
        let encabezado = document.getElementById("Encabezado");
        encabezado.innerHTML = "<img src='../img/sol.png' alt='Imagen-sol' style='width:70px; border-radius:50%''> Hola " + nombre + " 👋🏽";
      }

    else{
      let encabezado = document.getElementById("Encabezado");
      encabezado.innerHTML = "<img src='../img/"+nombre+".png' alt='Imagen-usuario' style='width:70px; border-radius:50%''> Hola " + nombre + " 👋🏽";
    }
  });


  // document.addEventListener('DOMContentLoaded', function() {
   
  //   let usuario = localStorage.getItem("username");

  //   if ( (usuario!="sol") && (usuario!="maia"))
  //   {
  //     if (usuario=="sofi") {
  //       let vista_sofi = document.getElementById("tabla-sofi");
  //       let estilosofi = window.getComputedStyle(vista_sofi);
  //       let vista_magui = document.getElementsByClassName("tabla-magui");
  //       let estilomagui = window.getComputedStyle(vista_magui);

  //       let vista_clau = document.getElementsByClassName("tabla-clau");
  //       let estiloclau = window.getComputedStyle(vista_clau);

  //       let vista_agus = document.getElementsByClassName("tabla-agus");
  //       let estiloagus = window.getComputedStyle(vista_agus);

  //       if(estilosofi.display==="none"){
  //         vista_sofi.style.display ="block" ;
  //       }

  //         vista_magui.style.display ="none" ;

        

      
  //         vista_clau.style.display ="none" ;

      

      
  //         vista_agus.style.display ="none " ;

        





  //     }
  //   }
    
  // });
