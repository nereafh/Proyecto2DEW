/*
Funciones globales:
Se escriben fuera del objeto y al no poder usar .this para apuntar al objeto,
no puedo acceder a datos del objeto

Funciones de objeto:
Al poder usar .this puedo acceder a los datos del objeto
*/

/*
superclase
Clase de la cual se crean los objetos de tipo avión para: Iberia.js, Ryanair.js y Binter.js
Utilizo constructores parametrizados
*/

class avion{

constructor (nombre, filas, columnas, precioBase, filasBusiness, filasEco, filasLowCost) {

    this.nombre = nombre,
    this.filas = filas,
    this.columnas = columnas,
    this.precioBase = precioBase,
    this.asientos = []; //Array que muestra si los asientos están o no libres


    //Número de filas por clase
    this.filasBusiness = filasBusiness;
    this.filasEco = filasEco;
    this.filasLowCost = filasLowCost;


    //Métodos
    /*
    1º Recorro los asientos y los marco como libres/sin reserva
    Asientos libres: verde, asientos ocupados: rojo
    Creo una matriz (array bidimensional) para representar los asientos, filas y columnas
    Empiezo por las filas y luego las columnas, daría igual hacerlo al revés
    */
    for(let i = 0; i < this.filas; i++) {
    this.asientos[i] = []; //Creo una nueva fila en la matriz, cada vez que itero se crea una nueva fila
    for(let j = 0; j < this.columnas; j++) {
        /*
        Asigno libres los asientos, ahora creo la tabla completa, tanto filas como columnas
        Como no sé qué asientos se quedarán libres o vacíos no le asigno valores al array, 
        al no hacerlo todos los valores se quedan como indefinidos por lo que se comportarían 
        como false/ocupados, por ello indico que todos son true/libres 
        Posteriormente será el usuario quien indique que asiento/s quiere ocupar
        */
        this.asientos[i][j] = true; 
    }

    }

}
    

    /*
    2º Reservo asientos seleccionados
    Para reservar un asiento necesito el número del asiento, lo 
    adquiero con el número de fila y columna, por lo que los paso como 
    parámetros para luego pedirselos al usuario

    if(this.asientos[fila][columna]){}
    Apunto al array asientos : [], el cual es un array con dos dimensiones
    representando las filas y columnas, formando una tabla


    */
    reservar(fila, columna){
        if(this.asientos[fila][columna]){
            this.asientos[fila][columna] = false; //si es el asiento indicado antes estaba libre/true ahora lo marco como ocupado/false

            return true; //devuelvo true indicando que la operación se realizó correctamente
        } else { //pero si ya estaba ocuapado devuelvo false, ya que no se realiza la operación
            alert("Asiento ya ocupado");
            return false;
        }
    }

       //Liberar asientos
    /*
    3º El usuario quiere liberar un asiento ya ocupado
    Al igual que para reservar pasamos un número de fila y columna
    */

    liberar(fila, columna){
        if(this.asientos[fila][columna]){
        this.asientos[fila][columna] = true; //los que antes estaban ocupados/false ahora pasan a libres/true
        return true; //acción realizada correctamente
    } else {
        alert("Asiento ya liberado");
        return false;
    }
    }


    /*
    Devuelve la clase según la fila, para ello solicito la fila en la que se encuentra
    Si la fila es menor o igual que el número de filasBusiness entonces pertenece a esa clase,
    tengo en cuenta que los asientos empiezan a númerarse desde el 0 comenzando por
    arriba a la izquierda y que las clases seguirán el orden: 1º Business, 2º Económica, 3º LoWCost
    Por lo que, para referirme a un asiento de la clase Económica o LowCost, tendré que tener
    en cuenta los asientos anteriores de las anteriores clases, sumándolos

    Ejemplo con Iberia:
    Business: filas 0 a 13 (14 filas)

    Económica: filas 14 a 26 (13 filas)

    Low-cost: filas 27 a 39 (13 filas)
    */
    obtenerClase(fila){
        if(fila < this.filasBusiness){
            return "Business";

        } else if(fila < this.filasBusiness + this.filasEco){
            return "Económica";
        } else {

            return "Low-Cost";
        }
    }


    /*
    Calcular precio según la clase
    3 clases:
    business = precioBase * 2
    eco = precioBase * 1.5
    low-cost = precioBase
    Y teniendo en cuenta si es o no residente
    */
     precioClase(fila, esResidente){ //Se le pasan los parametros: fila y si es o no residente
        
        //Obtengo la clase del usuario mediante la función anterior, le paso el parametro fila, utilizo .this para apuntar el método dentro de la clase el cual se refiere al objeto
        let clase = this.obtenerClase(fila);

        //Creo una variable que almacena el precio 
        let precio = this.precioBase;
        
    switch(clase){
        case 'business':
        precio = this.precioBase * 2;
        break; 

        case 'eco':
        precio = this.precioBase * 1.5;
        break;  

        case 'low-cost':
        precio = this.precioBase;
        break; 

        default:
        "Error inexperado";
        break;
    }

    if (esResidente){ //Si es residente se le hace un descuento del 75%, sea de la clase que sea
        precio = this.precioBase * 0.25;

        return precio; //devuelvo el precio final
    }

}
    

 

}
