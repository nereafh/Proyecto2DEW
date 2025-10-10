/*
Repito el mismo código que en Iberia.js
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
Esta vez la tabla es de 6 filas y 4 columnas
*/

/*
Creo un objeto de tipo avion en iberia.js, le doy parámetros
nombre, filas, columnas, precioBase, filaBusiness, filaEco, filaLowCost
*/
let binter = new avion("Binter", 25, 4, 60, 7, 9, 9);


/*
Al igual que con el proyecto anterior en la parte del semáforo, utilizo un switch para
controlar las diferentes opciones que puede elegir el usuario, en este caso si es o no residente
y en función de eso le asigno un precio u otro a los vuelos

Creo una variable booleana inicializada a false para validar la residencia, utilizo
un bucle while en donde indico que ésta tiene que ser true (!validarResidencia),
pido al usario que indique si es o no residente y si la respuesta es si o no, 
lo controlo con un switch, si no es ninguna de ellas irá al default y saldrá del switch, 
una vez controlada todas las opciones indico como true la variable validarResidencia para
salir del bucle

=== : operador de comparación estricta, compara tanto el valor como el tipo de dato
== : operador de comparación débil, compara solo el valor, no el tipo de dato
*/


/*
Continuo creando el array que contendrá los asientos, filas y columnas
Para formar la tabla completa tendré que crear un array de dos dimensiones
Empiezo por las filas y luego las columnas, daría igual hacerlo al revés

ESE ARRAY YA ESTÁ CREADO EN LA SUPERCLASE AVION NO ES NECESARIO VOLVERLO A CREAR,
LÓGICA YA APLICADA EN LA SUPERACLASE
let asientos = [];
for(let i = 0; i < filas; i++){
    asientos[i] = []; 
    for(let j = 0; j < columnas; j++){
        asientos[i][j] = true; //true === libres
    }

}
*/





document.write("<div class='contenedorBinter'>");
document.write("<img src='imagenes/avion.png' alt='Avion' class='fondoAvionBinter'>");
//Pinto la tabla con document.write()
document.write("<table class='asientosBinter'>");

//Recorro la matriz para pintar la tabla, comienzo por las filas
/*
tr: table row (fila de la tabla)
td: table data (celda de la tabla)

<tr>
    <td>filas</td>
    <td>columnas</td>
</tr>


*/
 /*
    .this
    Dentro de un método de una clase u objeto: apunta a la instancia del objeto
    En este caso la instancia es iberia y apunta al objeto avion para poder usar su estado y comportamiento


    Fuera de cualquier objeto: this apuntaría al objeto global, el cual en un navegador es window
    */
for(let i = 0; i < binter.filas; i++) {
    document.write("<tr>"); //Inicio fila
    for(let j = 0; j < binter.columnas; j++) {
        //Quiero que haya una separación entre columnas, en este caso 2 columnas, separación, otras 2 columnas, parae eso añado una línea con el color de fondo
        if(j === 2){
            document.write("<td class='pasilloBinter'></td>");

        }

        //Pinto cada celda, si el asiento está libre (true) lo pinto de verde, si está ocupado (false) lo pinto de rojo
        if(binter.asientos[i][j]) { //si es true, libres/verde sino ocupados/rojo
            document.write("<td id='asientoB-" + i + "-" + j + "' style='background-color: green; width: 3px; height: 18px; text-align: center;'> </td>"); 
        } else {
            document.write("<td id='asientoB-"+ i + "-" + j + "' style='background-color: red; width: 3px; height: 18px; text-align: center;'> </td>"); 
        }
    }
    document.write("</tr>"); //Cierro fila

}

document.write("</table>");
document.write("</div>");

//------------LEYENDA------------
//La incluyo justo después de crear la tabla
document.write("<div class='leyenda'>");
document.write("<div class='NumAsientosBinter'>");
document.write("<img src='imagenes/EnteroBinter.png' alt='avionCompleto'>");
document.write("<p>1-7 Business</p>");
document.write("<p>8-16 Economy</p>");
document.write("<p>17-25 Low-Cost</p>");
document.write("</div>");
document.write("</div>");





 //-------------INICIALIZAR LOCALSTORAGE----------
/*
Recorro la tabla, filas y columnas
esta clave se utiliza en localStorage para guardar si el asiento seleccionado 
está libre u ocupado

localStorage solo almacena cadenas
*/
for(let i = 0; i < binter.filas; i++){
    for(let j = 0; j < binter.columnas; j++){

        let clave = "asientoB-" + i + "-" + j; //Declaro una clave única para cada asiento basándome en el id de los asientos
        let td = document.getElementById(clave); //los asientos se encuentran en el td de la tabla

        if(localStorage.getItem(clave) == null){ //si está vacío, quiere decir que se guarda el valor inicial que ya había: libre
           localStorage.setItem(clave, binter.asientos[i][j] ? "true" : "false");
        } else { //si ya hay valor previo actualizo el estado del objeto
        
            binter.asientos[i][j] = (localStorage.getItem(clave) === "true");
        }

        //Pinto el asiento según su estado actual 
        if(td) {
            td.style.backgroundColor = binter.asientos[i][j] ? "green" : "red";
        }
    }
}

//--------------MANEJO EVENTOS ASIENTOS-------------
/*
Recorro la tabla, filas y columnas
Ahora la clave única de cada asiento será utilizada por los eventos
*/


for(let i = 0; i < binter.filas; i++){
    for(let j = 0; j < binter.columnas; j++){
        if(i === 2) continue; //ignora el pasillo

  /*
  copias independientes de los valores i/fila, j/columna
  ésta copia se hace sí o sí antes de los eventos para que 
  cada dirección apunte a la suya correspondiente
  */
    let fila = i; 
    let columna = j;
    let clave = "asientoB-" + fila + "-" + columna;
    let asientoEvento = document.getElementById(clave);

        /*
        onmouseover: cursor sobre elemento
        onmouseout: cursor sale del elemento 
        onmousedown: se presiona un botón del mouse sobre el elemento
        onmouseup: se suelta un botón del mouse

        Todos controlados con el operador condicional ternario condicion ? true : false;
        */
        

             asientoEvento.onmouseover = function SobreElemento() {
            asientoEvento.style.backgroundColor = binter.asientos[fila][columna] ? "rgba(0,128,0,0.4)" : "rgba(255,0,0,0.4)";
        }

       asientoEvento.onmouseout = function SaleDelElemento() {
            asientoEvento.style.backgroundColor = binter.asientos[fila][columna] ? "green" : "red";
        }
        asientoEvento.onmousedown = function PresionaBoton() {
            asientoEvento.style.backgroundColor = binter.asientos[fila][columna] ? "lightgreen" : "rgba(255,0,0,0.6)";
        }
        asientoEvento.onmouseup = function SueltaBoton() {
            asientoEvento.style.backgroundColor = binter.asientos[fila][columna] ? "green" : "red";
        }
 




    
        
        /*
        Evento onclick/botón: reserva asiento, afecta a todo el flujo 
        Verifica si el asiento está libre o no, si lo está lanza el mensaje y sale 
        para poder elegir un nuevo asiento

        Si  iberia.asientos[fila][columna] es false significa que está ocupado
        */
        asientoEvento.onclick = function Boton() {
        let estado = binter.asientos[fila][columna];
                
        
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

let clase = binter.obtenerClase(fila);
let precioFinal = binter.precioClase(fila, residente);



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
let confirmar;
let valConfirmar = false;

   while(!valConfirmar){

    confirmar = prompt(mensajeConfirmacion).toLowerCase();

    switch(confirmar){
    case "si":
        binter.reservar(fila, columna);
        //actualizo sessionStorage
        localStorage.setItem(clave, "false");
        binter.asientos[fila][columna] = false; //sincronizo/actualizo el objeto
        asientoEvento.style.backgroundColor = "red";
        alert("Reserva confirmada. Gracias.");
        valConfirmar = true;
    break;
    case "no":
        asientoEvento.style.backgroundColor = "green";
        valConfirmar = true;
    break;
    default:
        alert("Respuesta no válida. Por favor responda 'si' o 'no'.");
        asientoEvento.style.backgroundColor = "green";
    break;
    }
   } //Cierro el bucle antes del break, ya que si lo pongo después sale de él
    break; //fin del case true del gran switch




    case false:
        
     /*
    Si el asiento ya estaba ocupado (en la misma sesión) el usuario puede arrepentirse
    y desocuparlo
    i = fila;
    j = columna;
    */   


    let liberar
    let valiLibre = false;

    while(!valiLibre){
        
        liberar = prompt("Este asiento ya está ocupado. ¿Desea liberarlo? (si/no)").toLowerCase();

    switch(liberar){

        case "si":
            
            binter.liberar(fila, columna);
            localStorage.setItem(clave, "true"); // actualizar asiento libre
            binter.asientos[fila][columna] = true; //sincronizo/actualizo el asiento
            asientoEvento.style.backgroundColor = "green";
            
            valiLibre = true;
            break;

        case "no":
            asientoEvento.style.backgroundColor = "red";
            valiLibre = true;
            break;

        default:
            alert("Respuesta no válida. Por favor responda 'si' o 'no'.");
            asientoEvento.style.backgroundColor = "red";
            break;
    } 
    } //Cierro el bucle antes del break, ya que si lo pongo después sale de él
    break; //cierre case false gran switch
    

}
        

} //cierre evento onclick
} //cierre for 2
} //cierre for 1

//-------------BOTÓN VOLVER A PÁGINA PRINCIPAL--------------
/*
En Binter.html: 
creo el botón, esta creación podría compararse con la que hice de las imágenes en index.html,
las cuales no funcionan simplemente como enlaces, sino como botones enlazados 

Llamo al botón con su id
*/

let botonInicio = document.getElementById("btnInicio");
 botonInicio.onclick = function paginaInicial() {
        window.location.href = "index.html";
   };















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



