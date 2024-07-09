window.onload = function () {

  var botonEnlaces = document.getElementsByTagName('a');
  var audio = document.getElementById("sound-effect");

  //FUNCIÓN PARA VINCULAR HTMLs:
  botonEnlaces.addEventListener("click", redirigirAInicio);

  function redirigirAInicio() {
    audio.play();

    // Esperar 2 segundos antes de redirigir al usuario
    setTimeout(function () {
      window.location.href = "inicio.html";
    }, 3000);
  }
};
