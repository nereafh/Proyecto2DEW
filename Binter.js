/*
Repito el mismo código que en Iberia.js
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
Esta vez la tabla es de 6 filas y 4 columnas
*/

let filas = 6;
let columnas = 4;


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
Continuo creando el array que contendrá los asientos, filas y columnas
Para formar la tabla completa tendré que crear un array de dos dimensiones
Empiezo por las filas y luego las columnas, daría igual hacerlo al revés
*/

let asientos = [];
for(let i = 0; i < filas; i++){
    asientos[i] = []; 
    for(let j = 0; j < columnas; j++){
        asientos[i][j] = true; //true === libres
    }

}



//Pinto la tabla con document.write()
document.write("<h2>Asientos disponibles</h2>");
document.write("<table border='1'>");

//Recorro la matriz para pintar la tabla, comienzo por las filas
/*
tr: table row (fila de la tabla)
td: table data (celda de la tabla)

<tr>
    <td>filas</td>
    <td>columnas</td>
</tr>


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
