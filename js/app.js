var estudiantes = [];


function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var nombreEst= prompt("Ingrese el nombre del alumno:");
    var puntTec = prompt("Ingrese el puntaje tecnico obtenido:");
    var puntHse = prompt("Ingrese el puntaje HSE obtenido:");

    function nuevoEstudiante (nombre, tec, hse){
      this.nombre = nombre;
      this.tec = tec;
      this.hse = hse;
    }

    var nuevo = new nuevoEstudiante(nombreEst, puntTec, puntHse);
    estudiantes.push(nuevo);
    return nuevo;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var res = [];

    for(var i of estudiantes){
      res += mostrar(i);
    }
    console.log(res);
    return res;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var est = "";
    for (var i in estudiantes){
      if(nombre.toLowerCase() == estudiantes[i].nombre.toLowerCase()){
        est = estudiantes[i];
        return est;
      }
    }
    return  est;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

        estudiantes.sort(function (a,b){
        return b.tec - a.tec;
        });

    return estudiantes;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    estudiantes.sort(function (a,b){
    return b.hse - a.hse;
    });

return estudiantes;
}
