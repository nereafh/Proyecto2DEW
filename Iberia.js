/*
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
Tabla de 10 filas y 2 columnas
Asientos libres: verde, asientos ocupados: rojo



*/

/*
Creo un objeto de tipo avion en iberia.js, le doy parámetros
nombre, filas, columnas, precioBase
*/
let iberia = new avion("Iberia", 40, 9, 100);




//Pregunto acerca de la residencia
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
                document.write("<h3>No hay descuento aplicable</h3>");
                validarResidencia = true;
                break;

            default:
                alert("Respuesta no válida, por favor responde si o no");
                break;
        }

        console.log("Validación de residencia correcta");
        validarResidencia = true;



    } else {
        alert("Respuesta no válida, por favor responde si o no");
    }



}

        //Creo la tabla
    document.write("<div class='contenedorIberia'>");
    document.write("<img src='imagenes/avion.png' alt='Avion' class='fondoAvionIberia'>");
    document.write("<table class='asientosIberia'>");
    //Recorro la matriz para pintar la tabla, comienzo por las filas
    /*
    tr: table row (fila de la tabla)
    td: table data (celda de la tabla)
    */
    for(let i = 0; i < this.filas; i++) {
    document.write("<tr>"); //Inicio fila
    for(let j = 0; j < this.columnas; j++) {
        /*
        Quiero que haya una separación entre columnas, en este caso 3 columnas, separación, otras 3 columnas, separación y otras 3 columnas
        Si el número de filas es 3 O el número de columnas es 6, introduce un espacio en blanco, ambas se cumplirán
        */
        if(j === 3 || j === 6 ){
            document.write("<td class='pasilloIberia'></td>");

        }
        //Pinto cada celda, si el asiento está libre (true) lo pinto de verde, si está ocupado (false) lo pinto de rojo
        if(this.asientos[i][j]) { //si es true, libres/verde sino ocupados/rojo
            document.write("<td style='background-color: green; width: 10px; height: 10px; text-align: center;'> </td>"); 
        } else {
            document.write("<td style='background-color: red; width: 10px; height: 10px; text-align: center;'> </td>"); 
        }
    }
    document.write("</tr>"); //Cierro fila

}

document.write("</table>");
document.write("</div>"); //Contenedor padre
    

 




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