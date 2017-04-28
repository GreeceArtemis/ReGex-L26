
/*
/^(\([0-9]{2,3}\))+([0-9]{2,3})+[ |-]+([0-9]{4})/
/\d{8}/g
^/[9]{1}\d{8}/
/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]*[\s]?)+$/
*/

window.onload = function(){
    var formulario = document.getElementById('formulario');
    var boton_enviar = document.getElementById('enviar');
    var nota1=document.getElementById("nota1");
    nota1.style.display="none";
      boton_enviar.addEventListener("click",function(e){
        var contrasena=document.getElementById("contrasena");
        var confirmaContrasena=document.getElementById("confirmaContrasena");
        contrasena=contrasena.value;
        confirmaContrasena=confirmaContrasena.value;
          if(contrasena!==confirmaContrasena)
              {
              e.preventDefault();
              nota1.style.display="block";
              }
              else{
                nota1.style.display="none";
              }
      });
    if(formulario.checkValidity()){
          alert('El formulario es correcto!');
        }
  }
