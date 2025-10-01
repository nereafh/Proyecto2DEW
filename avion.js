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

constructor (nombre, filas, columnas, precioBase) {

    this.nombre = nombre,
    this.filas = filas,
    this.columnas = columnas,
    this.precioBase = precioBase,
    this.asientos = []; //Array que muestra si los asientos están o no libres

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
    Calcular precio según la clase
    3 clases:
    business = precioBase * 2
    eco = precioBase * 1.5
    low-cost = precioBase
    Y teniendo en cuenta si es o no residente
    */
     precioClase(clase){
    switch(clase.toLowerCase()){
        case 'business':
            return this.precioBase * 2; //Al poner directamente return en vez de break, sale directamente de la función

        case 'eco':
            return this.precioBase * 1.5;
        
        case 'low-cost':
            return this.precioBase;
        default:
            return 'Error inexperado';
    }

}
    

 

}
