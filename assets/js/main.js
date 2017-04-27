var enviar=document.getElementById("enviar");
var validacionNombre=/^([A-Z]{1}[a-z]+[\s]*)+$/;
enviar.addEventListener("click",function(e){
  e.preventDefault();
  //[0-9]{8}
  var nombre = document.getElementById("nombre").value;
  if( validacionNombre.test(nombre) ) {
    alert("error");
  }
});
