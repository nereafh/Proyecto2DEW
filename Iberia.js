/*
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
*/

let filas = 10
let columnas = 2;

//Pregunto acerca de su residencia
let residente = prompt("¿Eres residente en Canarias? (si/no)").toLowerCase();



/*
Asientos libres: verde, asientos ocupados: rojo
Creo una matriz (array bidimensional) para representar los asientos, filas y columnas

*/
let asientos = [];
for(let i = 0; i < filas; i++) {
    asientos[i] = []; //Creo una nueva fila en la matriz, cada vez que itero se crea una nueva fila
    for(let j = 0; j < columnas; j++) {
        asientos[i][j] = true; //Asigno libres los asientos, ahora creo la tabla completa, tanto filas como columnas
    }

}


//Pinto la tabla con document.write()
document.write("<h2>Asientos disponibles</h2>");
document.write("<table border='1'>");

//Recorro la matriz para pintar la tabla, comienzo por las filas
/*
tr: table row (fila de la tabla)
td: table data (celda de la tabla)
*/
for(let i = 0; i < filas; i++) {
    document.write("<tr>"); //Inicio fila
    for(let j = 0; j < columnas; j++) {
        //Pinto cada celda, si el asiento está libre (true) lo pinto de verde, si está ocupado (false) lo pinto de rojo
        if(asientos[i][j]) {
            document.write("<td style='background-color: green; width: 50px; height: 50px; text-align: center;'> </td>"); 
        } else {
            document.write("<td style='background-color: red; width: 50px; height: 50px; text-align: center;'> </td>"); 
        }
    }
    document.write("</tr>"); //Cierro fila

}

document.write("</table>");




//Controlo si es residente o no usando el operador condicional ?:
let respuesta = (residente ? "Sí" : "No");

//Lo muestro
document.write("<h3>Resides en canarias: " + respuesta + "</h3>");
