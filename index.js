    Iberia = document.getElementById("business");
    Ryanair = document.getElementById("eco");
    Binter = document.getElementById("low-cost");

    /*
    defino lo que ocurre al hacer click en cada imagen/botón, en este caso
    redirige a la página de la aerolínea correspondiente
    Uso window.location.href para cambiar la URL de la página actual

    window: objeto global que representa la ventana del navegador
    location: propiedad del objeto window que contiene información sobre la URL actual
    */
   Iberia.onclick = function otraPagina() {
        alert("Has seleccionado Iberia, serás redirigido a la página de Iberia");
        window.location.href = "Iberia.html";
   };
    Ryanair.onclick = function otraPagina() {
      alert("Has seleccionado Ryanair, serás redirigido a la página de Ryanair");
          window.location.href = "Ryanair.html";
    };
    Binter.onclick = function otraPagina() {
      alert("Has seleccionado Binter, serás redirigido a la página de Binter");
          window.location.href = "Binter.html";
    };

 