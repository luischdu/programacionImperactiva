
// estoy en una competencia de clavados,
// en dos arrays se muestran los 5 clavados que hacen los competidores 
//en una competencia gana el que tiene el mejor promedio de clavado
// en otra gana el competidor con el mejor clavado


let clavadosParticipanteA = [5, 8, 4, 9, 5]
let clavadosParticipanteB = [8, 7, 8, 6, 8]

let puntajePorPromedio = array => {
    //calcula el promedio
    let promedio = 0, suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    promedio = suma / array.length;
    return promedio
};

let puntajePorMayor = array => {
    //devuelve el mayor puntaje
    let puntajeAlto = 0;
    for (let i = 0; i < array.length; i++) {
        if (puntajeAlto < array[i]) {
            puntajeAlto = array[i]
        }
    }
    return puntajeAlto
};

const competencia = (arrayA, arrayB, callback) => {
    //calcular el puntaje de A = callback
    // calcular el puntaje de B = callback
    // comparar cual es mayor
    //devolver al ganador

}
console.log(puntajePorPromedio(clavadosParticipanteA));
console.log(puntajePorMayor(clavadosParticipanteA));

competencia(clavadosParticipanteA, clavadosParticipanteB, puntajePorPromedio) // Gano el A 
competencia(clavadosParticipanteA, clavadosParticipanteB, puntajePorMayor) // Gano el A 