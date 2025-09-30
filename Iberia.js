/*
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
Tabla de 10 filas y 2 columnas
Asientos libres: verde, asientos ocupados: rojo

*/

let filas = 10
let columnas = 2;

let residente;
let validarResidencia = false;

while(!validarResidencia){
    residente = prompt("¿Eres residente en Canarias? (si/no)").toLowerCase();

    if(residente === "si" || residente === "no"){

        switch(residente){

            case "si":
               // alert("Como eres residente en Canarias, se aplica un descuento del 75%");
               //Lo muestro
                document.write("<h3>Resides en canarias: " + residente + "</h3>");
                validarResidencia = true;
                break;

            case "no":
               // alert("Como no eres residente en Canarias, no se aplica ningún descuento");
               //Lo muestro
                document.write("<h3>Resides en canarias: " + residente + "</h3>");
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
/*
Asientos libres: verde, asientos ocupados: rojo
Creo una matriz (array bidimensional) para representar los asientos, filas y columnas
Empiezo por las filas y luego las columnas, daría igual hacerlo al revés
*/
let asientos = [];
for(let i = 0; i < filas; i++) {
    asientos[i] = []; //Creo una nueva fila en la matriz, cada vez que itero se crea una nueva fila
    for(let j = 0; j < columnas; j++) {
        /*
        Asigno libres los asientos, ahora creo la tabla completa, tanto filas como columnas
        Como no sé qué asientos se quedarán libres o vacíos no le asigno valores al array, 
        al no hacerlo todos los valores se quedan como indefinidos por lo que se comportarían 
        como false/ocupados, por ello indico que todos son true/libres 
        Posteriormente será el usuario quien indique que asiento/s quiere ocupar
        */
        asientos[i][j] = true; 
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
        if(asientos[i][j]) { //si es true, libres/verde sino ocupados/rojo
            document.write("<td style='background-color: green; width: 50px; height: 50px; text-align: center;'> </td>"); 
        } else {
            document.write("<td style='background-color: red; width: 50px; height: 50px; text-align: center;'> </td>"); 
        }
    }
    document.write("</tr>"); //Cierro fila

}

document.write("</table>");


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