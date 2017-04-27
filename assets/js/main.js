document.addEventListener("onsubmit",function(e){
  e.preventDefault();

  //[0-9]{8}
  var nombre = document.getElementById("nombre").value;
  if( nombre == null || nombre.length == 0 || /^[A-Z][a-z]{1,20}/.test(nombre) ) {
    alert("error");
  }
});
