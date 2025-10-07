/*
Repito el mismo proceso que en Iberia.js y Binter.js
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
Esta vez la tabla es de 12 filas y 6 columnas
*/



/*
Creo un objeto de tipo avion en iberia.js, le doy parámetros
nombre, filas, columnas, precioBase, filaBusiness, filaEco, filaLowCost
*/
let ryanair = new avion("Ryanair", 35, 6, 80, 11, 12, 12);



//---------------TABLA--------------------
  /*
Creo la tabla, recorro filas y columnas
*/


document.write("<div class='contenedor'>");
document.write("<img src='imagenes/avion.png' alt='Avion' class='fondoAvion'>");
document.write("<table class='asientos'>");

    /*
    .this
    Dentro de un método de una clase u objeto: apunta a la instancia del objeto
    En este caso la instancia es iberia y apunta al objeto avion para poder usar su estado y comportamiento


    Fuera de cualquier objeto: this apuntaría al objeto global, el cual en un navegador es window
    */
for(let i = 0; i < ryanair.filas; i++){
    document.write("<tr>"); //Inicio fila
    for(let j = 0; j < ryanair.columnas; j++) {
        //Quiero que haya una separación entre columnas, en este caso 3 columnas, separación, otras 3 columnas, parae eso añado una línea con el color de fondo
        if(j === 3){
            document.write("<td class='pasillo'></td>");

        }

        //Pinto cada celda, si el asiento está libre (true) lo pinto de verde, si está ocupado (false) lo pinto de rojo
        if(ryanair.asientos[i][j]) { //si es true, libres/verde sino ocupados/rojo
            document.write("<td id='asientoR-" + i + "-" +j + "' style='background-color: green; width: 10px; height: 17px; text-align: center;'> </td>"); 
        } else {
            document.write("<td id='asientoR-" + i + "-" +j + "' style='background-color: red; width: 10px; height: 17px; text-align: center;'> </td>"); 
    }
    }
    document.write("</tr>"); //Cierro fila
}


document.write("</table>");
document.write("</div>"); //contenedor padre


//------------LEYENDA------------
//La incluyo justo después de crear la tabla
document.write("<div class='leyenda'>");
document.write("<div class='NumAsientosRyanair'>");
document.write("<img src='imagenes/EnteroRyanair.png' alt='avionCompleto'>");
document.write("<p>1-11 Business</p>");
document.write("<p>12-23 Economy</p>");
document.write("<p>24-35 Low-Cost</p>");
document.write("</div>");
document.write("</div>");





 //-------------INICIALIZAR LOCALSTORAGE----------
/*
Recorro la tabla, filas y columnas
esta clave se utiliza en sessionStorage para guardar si el asiento seleccionado 
está libre u ocupado

localStorage solo almacena cadenas
*/
for(let i = 0; i < ryanair.filas; i++){
    for(let j = 0; j < ryanair.columnas; j++){

        let clave = "asientoR-" + i + "-" + j; //Declaro una clave única para cada asiento basándome en el id de los asientos
        let td = document.getElementById(clave); //los asientos se encuentran en el td de la tabla

        if(localStorage.getItem(clave) == null){ //si está vacío, quiere decir que se guarda el valor inicial que ya había: libre
           localStorage.setItem(clave, ryanair.asientos[i][j] ? "true" : "false");
        } else { //si ya hay valor previo actualizo el estado del objeto
        
            ryanair.asientos[i][j] = (localStorage.getItem(clave) === "true");
        }

        //Pinto el asiento según su estado actual 
        if(td) {
            td.style.backgroundColor = ryanair.asientos[i][j] ? "green" : "red";
        }
    }
}

//--------------MANEJO EVENTOS ASIENTOS-------------
/*
Recorro la tabla, filas y columnas
Ahora la clave única de cada asiento será utilizada por los eventos
*/


for(let i = 0; i < ryanair.filas; i++){
    for(let j = 0; j < ryanair.columnas; j++){
        if(i === 3) continue; //ignora el pasillo

  /*
  copias independientes de los valores i/fila, j/columna
  ésta copia se hace sí o sí antes de los eventos para que 
  cada dirección apunte a la suya correspondiente
  */
    let fila = i; 
    let columna = j;
    let clave = "asientoR-" + fila + "-" + columna;
    let asientoEvento = document.getElementById(clave);

        /*
        onmouseover: cursor sobre elemento
        onmouseout: cursor sale del elemento 
        onmousedown: se presiona un botón del mouse sobre el elemento
        onmouseup: se suelta un botón del mouse

        Todos controlados con el operador condicional ternario condicion ? true : false;
        */
        

             asientoEvento.onmouseover = function SobreElemento() {
            asientoEvento.style.backgroundColor = ryanair.asientos[fila][columna] ? "rgba(0,128,0,0.4)" : "rgba(255,0,0,0.4)";
        }

       asientoEvento.onmouseout = function SaleDelElemento() {
            asientoEvento.style.backgroundColor = ryanair.asientos[fila][columna] ? "green" : "red";
        }
        asientoEvento.onmousedown = function PresionaBoton() {
            asientoEvento.style.backgroundColor = ryanair.asientos[fila][columna] ? "lightgreen" : "rgba(255,0,0,0.6)";
        }
        asientoEvento.onmouseup = function SueltaBoton() {
            asientoEvento.style.backgroundColor = ryanair.asientos[fila][columna] ? "green" : "red";
        }
 




    
        
        /*
        Evento onclick/botón: reserva asiento, afecta a todo el flujo 
        Verifica si el asiento está libre o no, si lo está lanza el mensaje y sale 
        para poder elegir un nuevo asiento

        Si  iberia.asientos[fila][columna] es false significa que está ocupado
        */
        asientoEvento.onclick = function Boton() {
        let estado = ryanair.asientos[fila][columna];
                
        
/*
controlo los estaods de los asientos con un switch 
true/libre, false/ocupado
Tengo en cuenta que si está libre debo preguntar la residencia, mostrar el tipo de clase y el precio final,
además de la confirmación de reserva 
Si está ocupado y es la misma sesión el usuario podrá liberar ese asiento, teniendo la posibilidad de arrepentirse
*/

switch (estado){

    case true: //asiento libre


//--------------------RESIDENCIA-----------
/*
Manejo la respuesta dentro de un bucle para que el usuario tenga que responder sí o sí
Esto servirá para conocer si se hará o no el descuento del 75%
En el caso de que indique una respuesta fuera de las dadas, utilizo alert() para mostrar el mensaje de error y 
repetir el bucle
*/
let residente;
let validarResidencia = false;

while(!validarResidencia){
    residente = prompt("¿Eres residente en Canarias? (si/no)").toLowerCase();


        switch(residente){

            case "si":
              
                validarResidencia = true; //sale del bucle
                break;

            case "no":
               // alert("Como no eres residente en Canarias, no se aplica ningún descuento");
               //Lo muestro
                //document.write("<h3>No hay descuento aplicable</h3>");
                validarResidencia = true; //sale del bucle
                break;

            default:
                alert("Respuesta no válida, por favor responde si o no");
                break;
        }

        console.log("Validación de residencia correcta");

}




//-------------PRECIO FINAL----------
/*
 Para ello obtengo la clase y el precio apuntando a la dirección de la clase avion.js la
 cual es la plantilla para crear objetos de tipo avion.
i = fila
 */

let clase = ryanair.obtenerClase(fila);
let precioFinal = ryanair.precioClase(fila, residente);



//----------CONFIRMACIÓN RESERVA----------
/*
(No puedo poner una función en la superclase y que las demás utilicen dicha función si
la función contiene eventos, esa lógica no puede estar separada)


Si el usuario confirma se reserva/ocupa el asiento, sino sale para que el usuario pueda elegir un nuevo asiento
esto lo manejo con la función reservar la cual adquiero apuntando a la clase avion.js

Muestro la clase: business, económica, low-cost, el precio final, si se ha aplicado descuento o no y la confirmación de reserva
*/


let mensajeConfirmacion;
if(residente === "si"){
 mensajeConfirmacion = "Has elegido un asiento: " + clase + ". Precio final: " + precioFinal + "€. Se aplicó un 75% de descuento por ser residente. ¿Desea confirmar reserva? (si/no)"

} else {
 mensajeConfirmacion = "Has elegido un asiento: " + clase + ". Precio final: " + precioFinal + "€. No se aplicó descuento. ¿Desea confirmar reserva? (si/no)"

}

/*
Controlo la respuesta mediante otro switch y teniendo en cuenta la localStorage
Si confirma la reserva el asiento se ocupa/false/rojo, actualizo el localStorage sino no
*/
let confirmar = prompt(mensajeConfirmacion).toLowerCase();


   
    switch(confirmar){
    case "si":
        ryanair.reservar(fila, columna);
        //actualizo localStorage
        localStorage.setItem(clave, "false");
        ryanair.asientos[fila][columna] = false; //sincronizo/actualizo el objeto
        asientoEvento.style.backgroundColor = "red";
        alert("Reserva confirmada. Gracias.");
    break;
    case "no":
        asientoEvento.style.backgroundColor = "green";
    break;
    default:
        alert("Respuesta no válida. Por favor responde 'si' o 'no'.");
        asientoEvento.style.backgroundColor = "green";
    break;
    }

    break; //fin del case true del gran switch
    


    case false:
        
     /*
    Si el asiento ya estaba ocupado (en la misma sesión) el usuario puede arrepentirse
    y desocuparlo
    i = fila;
    j = columna;
    */   


    let liberar
    liberar = prompt("Este asiento ya está ocupado. ¿Desea liberarlo? (si/no)").toLowerCase();

    switch(liberar){

        case "si":
            
            ryanair.liberar(fila, columna);
            localStorage.setItem(clave, "true"); // actualizar asiento libre
            ryanair.asientos[fila][columna] = true; //sincronizo/actualizo el asiento
            asientoEvento.style.backgroundColor = "green";
            
            break;

        case "no":
            asientoEvento.style.backgroundColor = "red";
            break;

        default:
            alert("Respuesta no válida.");
            asientoEvento.style.backgroundColor = "red";
            break;
    }
    break; //cierre case false gran switch

}
        

} //cierre evento onclick
} //cierre for 2
} //cierre for 1
/*
Repito los pasos anteriores
Creo un array que recorra las filas y dentro de ellas las columas
LOGICA YA APLICADA EN LA SUPERCLASE AVION
let asientos = [];

for(let i = 0; i < filas; i++){
    asientos[i] = [];

    for(let j = 0; j < columnas; j++){
        asientos[i][j] = true;
    }
}
*/



