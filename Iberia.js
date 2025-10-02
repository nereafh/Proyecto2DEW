/*
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
Tabla de 10 filas y 2 columnas
Asientos libres: verde, asientos ocupados: rojo



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
    //Recorro la matriz para pintar la tabla, comienzo por las filas
    /*
    tr: table row (fila de la tabla)
    td: table data (celda de la tabla)
    */

    /*
    .this
    Dentro de un método de una clase u objeto: apunta a la instancia del objeto
    En este caso la instancia es iberia y apunta al objeto avion para poder usar su estado y comportamiento


    Fuera de cualquier objeto: this apuntaría al objeto global, el cual en un navegador es window
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

        Cada asiento tiene su id único, para ello concateno strings y variables con +
        */
       
        

        //Pinto cada celda, si el asiento está libre (true) lo pinto de verde, si está ocupado (false) lo pinto de rojo
        if(iberia.asientos[i][j]) { //si es true, libres/verde sino ocupados/rojo
            document.write("<td id='asiento-" + i + "-" +j + "' style='background-color: green; width: 10px; height: 10px; text-align: center;'> </td>"); 
        } else {
            document.write("<td id='asiento-" + i + "-" +j + "' style='background-color: red; width: 10px; height: 10px; text-align: center;'> </td>"); 
        }
    }
    document.write("</tr>"); //Cierro fila

}

document.write("</table>");
document.write("</div>"); //Contenedor padre
    

 



//--------------MANEJO EVENTOS ASIENTOS-------------


for(let i = 0; i < iberia.filas; i++){
    for(let j = 0; j < iberia.columnas; j++){
        if(i === 3 || i === 6) continue; //ignora el pasillo

        


        /*
    Recorro la tabla, filas y columnas

    El id es el de las filas y columnas que indique anteriormente al crear la tabla en los td

    ¿?¿?¿¿?
    */
    let fila = i; 
    let columna = j;
    let asientoEvento = document.getElementById("asiento-" + i + "-" + j);

        /*
        onmouseover: cursor sobre elemento
        onmouseout: cursor sale del elemento 
        onmousedown: se presiona un botón del mouse sobre el elemento
        onmouseup: se suelta un botón del mouse
        */
        asientoEvento.onmouseover = function SobreElemento(){

            if(iberia.asientos[fila][columna]){
                asientoEvento.style.backgroundColor = " rgba(0, 128, 0, 0.4)";
            } else {
                asientoEvento.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
            }
        }


        asientoEvento.onmouseout = function SaleDelElemento() {
            if (iberia.asientos[fila][columna]) {

        asientoEvento.style.backgroundColor = "green"; //libre

        }else {

        asientoEvento.style.backgroundColor = "red"; //ocupado
    }
  }  


        asientoEvento.onmousedown = function PresionaBoton(){
            if(iberia.asientos[fila][columna]){
                asientoEvento.style.backgroundColor = "lightgreen";
            } else {
                asientoEvento.style.backgroundColor = "rgba(255,0,0,0.6)";
            }
        }
/*
// Evento cuando se suelta el mouse sobre el asiento
        asientoEvento.onmouseup = function () {
            if (!iberia.asientos[i][j]) {
                alert("Asiento ocupado. Selecciona otro.");
                return;
            }
*/
        asientoEvento.onmouseup = function PresionaBoton(){
            if(iberia.asientos[fila][columna]){
                asientoEvento.style.backgroundColor = "green";
            } else {
                asientoEvento.style.backgroundColor = "red";
            }
        }

    
        
        /*
        Evento de click: reserva asiento, afecta a todo el flujo 
        Verifica si el asiento está libre o no, si lo está lanza el mensaje y sale 
        para poder elegir un nuevo asiento

        Si  iberia.asientos[fila][columna] es false significa que está ocupado
        */
        asientoEvento.onclick = function() {
            if (!iberia.asientos[fila][columna]) {
                alert("Asiento ocupado. Selecciona otro.");
                return;
            }







//--------------------RESIDENCIA-----------
let residente;
let validarResidencia = false;

while(!validarResidencia){
    residente = prompt("¿Eres residente en Canarias? (si/no)").toLowerCase();

    if(residente === "si" || residente === "no"){

        switch(residente){

            case "si":
               // alert("Como eres residente en Canarias, se aplica un descuento del 75%");
               //Lo muestro
                document.write("<h3 style = 'font-size: 14px;'>Se aplicará el 75% de descuento</h3>");
                validarResidencia = true;
                break;

            case "no":
               // alert("Como no eres residente en Canarias, no se aplica ningún descuento");
               //Lo muestro
                //document.write("<h3>No hay descuento aplicable</h3>");
                validarResidencia = true;
                break;

            default:
                alert("Respuesta no válida, por favor responde si o no");
                break;
        }

        console.log("Validación de residencia correcta");



    } else {
        alert("Respuesta no válida, por favor responde si o no");
    }



}


//-------------PRECIO FINAL----------
/*
 Para ello obtengo la clase y el precio

 */

let clase = iberia.obtenerClase(fila);
let precioFinal = iberia.precioClase(fila, residente);



//----------CONFIRMACIÓN RESERVA----------
/*
No puedo poner una función en la superclase y que las demás utilicen dicha función si
la función contiene eventos, esa lógica no puede estar separada


Si el usuario confirma se reserva/ocupa el asiento, sino sale para que el usuario pueda elegir un nuevo asiento
esto lo manejo con la función reservar
*/
let confirmar = prompt("Has elegido un asiento " + clase + ". Precio final: " + precioFinal + "€. ¿Confirmar reserva? (si/no)").toLowerCase();
   
    switch(confirmar){
    case "si":
        iberia.reservar(i, j);
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
            asientos[i][j][k] = true; // tercera dimensión
        }
    }
}
*/