    Iberia = document.getElementById("bussines");
    Ryanair = document.getElementById("eco");
    Binter = document.getElementById("low-cost");

    /*
    defino lo que ocurre al hacer click en cada imagen/botón, en este caso
    redirige a la página de la aerolínea correspondiente
    Uso window.location.href para cambiar la URL de la página actual

    window: objeto global que representa la ventana del navegador
    location: propiedad del objeto window que contiene información sobre la URL actual
    */
   Iberia.onclick = function() {
        window.location.href = "Iberia.html";
   };
    Ryanair.onclick = function() {
          window.location.href = "Ryanair.html";
    };
    Binter.onclick = function() {
          window.location.href = "Binter.html";
    };
