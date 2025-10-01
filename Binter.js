/*
Repito el mismo código que en Iberia.js
Pregunto y recojo los damos utilizando prompt y los guardo en variables
Pinto la tabla con document.write()
Esta vez la tabla es de 6 filas y 4 columnas
*/

/*
Creo un objeto de tipo avion en iberia.js, le doy parámetros
nombre, filas, columnas, precioBase
*/
let binter = new avion("Binter", 25, 4, 60);


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
            document.write("<td style='background-color: green; width: 3px; height: 18px; text-align: center;'> </td>"); 
        } else {
            document.write("<td style='background-color: red; width: 3px; height: 18px; text-align: center;'> </td>"); 
        }
    }
    document.write("</tr>"); //Cierro fila

}

document.write("</table>");
document.write("</div>");