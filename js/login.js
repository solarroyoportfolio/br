function login(){
    event.preventDefault(); 
    let user = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (user=="sol" && password=="br1234"){
        window.location ="br.html";
        localStorage.setItem("username", "sol");

    }else
    if (user=="sofi" && password=="br1234"){
        window.location ="br.html";
        localStorage.setItem("username", "sofi");
    }    
    else 
    if (user=="magui" && password=="br1234"){
        window.location ="br.html";
        localStorage.setItem("username", "magui");
    }  else
    if (user=="agus" && password=="br1234"){
        window.location ="br.html";
        localStorage.setItem("username", "agus");
    }  
    else  if (user=="maia" && password=="br1234"){
        window.location ="br.html";
        localStorage.setItem("username", "maia");
    }  else 
    if (user=="clau" && password=="br1234"){
        window.location ="br.html";
        localStorage.setItem("username", "clau");
    }  else if (user=="fran" && password=="br1234"){
        window.location ="br.html";
        localStorage.setItem("username", "fran");
    }  else if (user=="geor" && password=="br1234"){
        window.location ="br.html";
        localStorage.setItem("username", "geor");
    }  else
    {
        alert("Datos incorrectos");
    }


}