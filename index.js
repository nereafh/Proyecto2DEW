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


    /*
    
    El usuario entra en su primera sesión, elige cualquier compañia
    ocupa los asientos que quiera, éstos cambian a rojo/ocupados, si en culquier
    momento de la misma sesión el usuario se arrepiente de ocupar algunos de los
    asientos ya comprados se le dará la opción de liberar dichos asientos seleccionados
    utilizando el método liberar
    Por otro lado, si el usuario ocupa X asientos y sale de la sesión, esos asientos
    quedan completamente guardados y ya no hay manera de liberarlos por estar en una 
    sesión diferente a la anterior donde sí tenía oportunidad 
    
    */