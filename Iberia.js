/*
Creo un objeto utilizando la clase avion.js creada únicamente para hacer de 
superclase, accediento a ella para utilizar los atributos/estados y
métodos/comportamientos del objeto

Pinto la tabla utilizando document.write(), la cual 
la sitúo encima de la imagen de un avión, tanto la tabla como la foto 
les doy estilos en style.css

Inicializo la SessionStorage, la cual guarda datos mientras dure la sesión del 
navegador, si cierro la pestaña se borrarán, si no hay un valor previo se 
guarda el inicial, si ya había valor previo lo uso para actualizar el estado
del objeto

Manejo de eventos. Interactividad para la tabla, es decir, para cada asiento
- Cambio de color al pasar el ratón por encima, presionar
- onclick: para el botón manteniendo los cambios de color


Residencia: pregunto al usuario mediante prompt() si es o no residente, controlo
sus respuestas con switch y while para que sí o sí indique una respuesta

Precio final y confirmación de reserva: dependiendo de si el usuario es o no residente 
se le muestra un precio final u otro dependiendo de la clase del asiento.
Si confirma la reserva, se ocupa el asiento, sino sale y vuelve a mostrar la tabla
con los asientos.

*/


/*
.this
Dentro de un método de una clase: apunta a la instancia del objeto
    
En este caso la instancia es iberia y apunta al objeto tipo avion para poder usar su estado/atributos y comportamiento/métodos

Fuera de cualquier objeto: this apuntaría al objeto global, el cual en un navegador es window
*/


/*
-----------------OBJETO------------------------
Creo un objeto de tipo avion en iberia.js, le doy parámetros
nombre, filas, columnas, precioBase, filaBusiness, filaEco, filaLowCost

*/



let iberia = new avion("Iberia", 40, 9, 100, 14, 13, 13);


//---------------TABLA--------------------
    document.write("<div class='contenedorIberia'>");
    document.write("<img src='imagenes/avion.png' alt='Avion' class='fondoAvionIberia'>");
    document.write("<table class='asientosIberia'>");
    
    /*
    Recorro la matriz para pintar la tabla, comienzo por las filas y luego las columnas (podría hacerlo al revés)
    tr: table row (fila de la tabla)
    td: table data (celda de la tabla)
    */

    for(let i = 0; i < iberia.filas; i++) {
    document.write("<tr>"); //Inicio fila
    for(let j = 0; j < iberia.columnas; j++) {
        /*
        Quiero que haya una separación entre columnas, en este caso 3 columnas, separación, otras 3 columnas, separación y otras 3 columnas
        Si el número de filas es 3 O el número de columnas es 6, introduce un espacio en blanco, ambas se cumplirán
        */
        if(j === 3 || j === 6 ){
            document.write("<td class='pasilloIberia'></td>");

        }

        /*
        Uso de eventos para los asientos
        document.write("<td id='asiento-" + i + "-" +j + "      ' style='background-color: green; width: 10px; height: 10px; text-align: center;'> </td>"); 

        Cada asiento tiene su id único, para ello concateno con +
        Pinto cada celda, si el asiento está libre (true) lo pinto de verde, si está ocupado (false) lo pinto de rojo
        */

        if(iberia.asientos[i][j]) { 
            document.write("<td id='asiento-" + i + "-" + j + "' style='background-color: green; width: 10px; height: 10px; text-align: center;'> </td>"); 
        } else {
            document.write("<td id='asiento-" + i + "-" + j + "' style='background-color: red; width: 10px; height: 10px; text-align: center;'> </td>"); 
        }
    }
    document.write("</tr>"); //Cierro fila

}

document.write("</table>"); //Cierre tabla
document.write("</div>"); //Contenedor padre
    

//------------LEYENDA------------
/*
La incluyo justo después de crear la tabla
*/
document.write("<div class='leyenda'>");
document.write("<div class='NumAsientos'>");
document.write("<img src='imagenes/EnteroIberia.png' alt='avionCompleto'>");
document.write("<p>1-14 Business</p>");
document.write("<p>15-27 Economy</p>");
document.write("<p>28-40 Low-Cost</p>");
document.write("</div>");
document.write("</div>");



 //-------------INICIALIZAR LOCALSTORAGE----------
/*
Recorro la tabla, filas y columnas
esta clave se utiliza en localStorage para guardar si el asiento seleccionado 
está libre u ocupado

sessionStorage y localStorage solo almacena cadenas
sessionStorage: solo guarda durante la sesión
localStorage: guarda en local, es decir, aunque se cierre la sesión
*/
for(let i = 0; i < iberia.filas; i++){
    for(let j = 0; j < iberia.columnas; j++){

        let clave = "asiento-" + i + "-" + j; //Declaro una clave única para cada asiento basándome en el id de los asientos
        let td = document.getElementById(clave); //los asientos se encuentran en el td de la tabla

        if(localStorage.getItem(clave) == null){ //si está vacío, quiere decir que se guarda el valor inicial que ya había: libre
           localStorage.setItem(clave, iberia.asientos[i][j] ? "true" : "false");
        } else { //si ya hay valor previo actualizo el estado del objeto
        
            iberia.asientos[i][j] = (localStorage.getItem(clave) === "true");
        }

        //Pinto el asiento según su estado actual 
        if(td) {
            td.style.backgroundColor = iberia.asientos[i][j] ? "green" : "red";
        }
    }
}

//--------------MANEJO EVENTOS ASIENTOS-------------
/*
Recorro la tabla, filas y columnas
Ahora la clave única de cada asiento será utilizada por los eventos
*/


for(let i = 0; i < iberia.filas; i++){
    for(let j = 0; j < iberia.columnas; j++){
        if(i === 3 || i === 6) continue; //ignora el pasillo

  /*
  copias independientes de los valores i/fila, j/columna
  ésta copia se hace sí o sí antes de los eventos para que 
  cada dirección apunte a la suya correspondiente
  */
    let fila = i; 
    let columna = j;
    let clave = "asiento-" + fila + "-" + columna;
    let asientoEvento = document.getElementById(clave);

        /*
        onmouseover: cursor sobre elemento
        onmouseout: cursor sale del elemento 
        onmousedown: se presiona un botón del mouse sobre el elemento
        onmouseup: se suelta un botón del mouse

        Todos controlados con el operador condicional ternario condicion ? true : false;
        */
        

             asientoEvento.onmouseover = function SobreElemento() {
            asientoEvento.style.backgroundColor = iberia.asientos[fila][columna] ? "rgba(0,128,0,0.4)" : "rgba(255,0,0,0.4)";
        }

       asientoEvento.onmouseout = function SaleDelElemento() {
            asientoEvento.style.backgroundColor = iberia.asientos[fila][columna] ? "green" : "red";
        }
        asientoEvento.onmousedown = function PresionaBoton() {
            asientoEvento.style.backgroundColor = iberia.asientos[fila][columna] ? "lightgreen" : "rgba(255,0,0,0.6)";
        }
        asientoEvento.onmouseup = function SueltaBoton() {
            asientoEvento.style.backgroundColor = iberia.asientos[fila][columna] ? "green" : "red";
        }
 




    
        
        /*
        Evento onclick/botón: reserva asiento, afecta a todo el flujo 
        Verifica si el asiento está libre o no, si lo está lanza el mensaje y sale 
        para poder elegir un nuevo asiento

        Si  iberia.asientos[fila][columna] es false significa que está ocupado
        */
        asientoEvento.onclick = function Boton() {
        let estado = iberia.asientos[fila][columna];
                
        
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

let clase = iberia.obtenerClase(fila);
let precioFinal = iberia.precioClase(fila, residente);



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
Controlo la respuesta mediante otro switch y teniendo en cuenta la sessionStorage
Si confirma la reserva el asiento se ocupa/false/rojo, actualizo el sessionStorage sino no
*/
let confirmar = prompt(mensajeConfirmacion).toLowerCase();


   
    switch(confirmar){
    case "si":
        iberia.reservar(fila, columna);
        //actualizo sessionStorage
        localStorage.setItem(clave, "false");
        iberia.asientos[fila][columna] = false; //sincronizo/actualizo el objeto
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
            
            iberia.liberar(fila, columna);
            localStorage.setItem(clave, "true"); // actualizar asiento libre
            iberia.asientos[fila][columna] = true; //sincronizo/actualizo el asiento
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
También podría haber controlado la residencia con el operador condicional ?:
let residente = prompt("¿Eres residente en Canarias? (si/no)").toLowerCase();
let esResidente = (residente === "si") ? true : false;

if(esResidente) {
    document.write("<h3>Resides en canarias: " + residente + "</h3>");
} else {
    document.write("<h3>Resides en canarias: " + residente + "</h3>");
}   
*/

/*
Array de varias dimensiones:
let asientos = [];

for (let i = 0; i < filas; i++) {
    asientos[i] = []; // primera dimensión

    for (let j = 0; j < columnas; j++) {
        asientos[i][j] = []; // segunda dimensión

        for (let k = 0; k < 3; k++) {
            asientos[i][j][k] = true; // tercera dimensión si hubiera
        }
    }
}
*/
