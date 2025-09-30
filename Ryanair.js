/*
Repito el mismo proceso que en Iberia.js y Binter.js
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
Esta vez la tabla es de 12 filas y 6 columnas
*/

let filas = 12;
let columnas = 6;

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
Repito los pasos anteriores
Creo un array que recorra las filas y dentro de ellas las columas
*/
let asientos = [];

for(let i = 0; i < filas; i++){
    asientos[i] = [];

    for(let j = 0; j < columnas; j++){
        asientos[i][j] = true;
    }
}


/*
Creo la tabla, recorro filas y columnas
*/

document.write("<table border = 1>");

for(let i = 0; i < filas; i++){
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