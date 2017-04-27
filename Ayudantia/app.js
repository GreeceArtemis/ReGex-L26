var valorWidth=document.getElementById("widthImg").value;
var valorHeight=document.getElementById("heightImg").value;
var imagen=document.getElementById("img");
//parseInt(valorWidth);
//parseInt(valorHeight);
document.addEventListener("click",function(e){
  //e.preventDefault();
  var valorWidth=document.getElementById("widthImg").value;
  var valorHeight=document.getElementById("heightImg").value;
  var imagen=document.getElementById("img");
  //parseInt(valorWidth);
  document.getElementById("img").style.width=valorWidth+"px"
  document.getElementById("img").style.height=valorHeight+"px"
})
