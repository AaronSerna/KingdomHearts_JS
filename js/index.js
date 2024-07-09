window.onload = function () {
  mostrarContenidoPrincipal();

  //FUNCIÓN PARA EL LOADER:
  function mostrarContenidoPrincipal() {
    setTimeout(function () {
      document.getElementById("loader1").classList.add("fade-out");
      setTimeout(function () {
        document.getElementById("loader1").style.display = "none"; // Ocultar el loader
        document.getElementById("loader2").classList.remove("d-none");
      }, 2000); // Duración de la animación de fade-out
    }, 5000);

    setTimeout(function () {
      document.getElementById("loader2").classList.add("fade-out");
      setTimeout(function () {
        document.getElementById("loader3").classList.remove("d-none");
      }, 3000); // Duración de la animación de fade-out
    }, 11000);

    setTimeout(function () {
      document.getElementById("loader3").classList.add("fade-out");
      setTimeout(function () {
        document.querySelector(".main-content").classList.remove("d-none"); // Mostrar el contenido principal
      }, 2000); // Duración de la animación de fade-out
    }, 17500);
  }

  var botonInicio = document.getElementById("botonInicio");
  var audio = document.getElementById("sound-effect");

  //FUNCIÓN PARA VINCULAR HTMLs:
  botonInicio.addEventListener("click", redirigirAInicio);

  function redirigirAInicio() {
    audio.play();

    // Esperar 2 segundos antes de redirigir al usuario
    setTimeout(function () {
      window.location.href = "inicio.html";
    }, 3000);
  }
};
