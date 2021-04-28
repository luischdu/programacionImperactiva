console.log("__________1____________");
// 1.reciba un valor y nos retorne si ese valor es par o impar. 
function esPar(num1) {
    return num1 % 2 == 0 ? "Es un número par" : "Es un número impar";
}

console.log(esPar(2));
console.log(esPar(1));
console.log(esPar(7));
console.log(esPar(91));
console.log(esPar(128));

console.log("___________2___________");

//2. levante una barrera si el vehículo pagó el peaje.
function peaje(pago) {
    return pago == true ? "Buen viaje, disfrute la consección" : "No ha pagado, no puede pasar!!!";
}
console.log(peaje(true));
console.log(peaje(false));
console.log("____________3__________");
//3. reciba un número y retorne si es el mismo que eligió al azar la función Math.random() entre 0 y 10.
function aleatorio(num2) {
    return num2 == Math.round(Math.random() * 10) ? "Es el mismo número" : "No es el mismo número";
}
console.log(aleatorio(1));
console.log(aleatorio(2));
console.log(aleatorio(3));
console.log(aleatorio(4));
console.log(aleatorio(5));
console.log(aleatorio(6));
console.log(aleatorio(7));
console.log(aleatorio(8));
console.log(aleatorio(9));
console.log(aleatorio(10));
console.log("___________4___________");
//4. al recibir una fecha indique si la misma es navidad o no.
function navidad(fecha) {
    return fecha == "25.12.2021" ? "Es Navidad, Felices fiestas" : "Es un día para ser feliz!, pero no es Navidad";
}
console.log(navidad("25.12.2021"));
console.log(navidad("25.11.2021"));

console.log("____________5__________");
//5. al recibir un mes, con un switch, nos indique cuántos días tiene ese mes.
function cantidadDias(mes) {
    switch (mes) {
        case "enero":
        case "marzo":
        case "mayo":
        case "julio":
        case "agosto":
        case "octubre":
        case "diciembre":

            return "El mes de " + mes + " tiene 31 días";
            break;
        case "abril":
        case "junio":
        case "septiembre":
        case "noviembre":
            return "El mes de " + mes + " tiene 30 días";
            break;

        case "febrero":
            return "El mes de " + mes + " tiene 28 días y 29 si es el año bisiesto";
            break;

        default:
            return "Mes no encontrado";
            break;
    }

}

console.log(cantidadDias("enero"));
console.log(cantidadDias("febrero"));
console.log(cantidadDias("marzo"));
console.log(cantidadDias("abril"));
console.log(cantidadDias("mayo"));
console.log(cantidadDias("junio"));
console.log(cantidadDias("julio"));
console.log(cantidadDias("agosto"));
console.log(cantidadDias("septiembre"));
console.log(cantidadDias("octubre"));
console.log(cantidadDias("noviembre"));
console.log(cantidadDias("diciembre"));
console.log(cantidadDias("dicmbre"));

console.log("___________6___________");
//6. reciba un valor por parámetro e indique que el alumno recursa si tiene una nota menor a 4, va a recuperatorio si tiene una nota menor a 7 y aprueba en el caso de que la nota sea igual o superior a 7.
function colegio(nota) {
    if (nota < 5) {
        return "No aprobaste!";
    } else if (nota < 7 && nota > 4) {
        return "Puedes mejorar, a recuperar"
    } else if (nota >= 7) {
        return "Aprobaste, estupendo!"
    } else {
        return "Nota no valida"
    }

}

console.log(colegio(3));
console.log(colegio(5));
console.log(colegio(7));

console.log("____________7__________");

//7. que retorne si una nave espacial que está entrando a la atmósfera ya puede abrir su paracaídas. La altura debe ser entre 2000 m. y 3000 m., y la velocidad debe ser menor a 1000 km/h.

function nave(altura, velocidad) {
    return altura > 2000 && altura < 3000 & velocidad < 1000 ? "Abrir paracaidas" : "Ajuste los parametros de aterrizaje"

}
console.log(nave(2300, 800));
console.log(nave(300, 800));
console.log(nave(2300, 1800));

console.log("____________8__________");
//8. recibe 3 parámetros booleanos que indican ingredientes de un sandwich y determina su valor final. El valor base es de $150, con tomate $20+, con papas $50+, con huevo $60+. 

function precio(tomate, papas, huevo) {
    let costo = 150 + tomate * 20 + papas * 50 + huevo * 60;
    return "El sandwich vale: " + costo;
}

console.log(precio(false, true, false));
console.log(precio(false, true, true));

console.log("____________9__________");
//9. Tomando esto de ejemplo, crear una función que reciba por parámetro un mes y devuelva a qué estación climática pertenece (verano, invierno, otoño o primavera).
//Hemisferio norte
function estaciones(mes) {
    switch (mes) {
        case "marzo":
        case "abril":
        case "mayo":

            return "El mes de " + mes + " pertenece a la primavera";
            break;

        case "junio":
        case "julio":
        case "agosto":
            return "El mes de " + mes + " pertenece a la verano";
            break;

        case "septiembre":
        case "octubre":
        case "noviembre":
            return "El mes de " + mes + " pertenece a la otoño";
            break;

        case "diciembre":
        case "enero":
        case "febrero":
            return "El mes de " + mes + " pertenece a la invierno";
            break;
        default:
            return "Mes no encontrado";
            break;
    }

}
console.log(estaciones("enero"));
console.log(estaciones("febrero"));
console.log(estaciones("marzo"));
console.log(estaciones("abril"));
console.log(estaciones("mayo"));
console.log(estaciones("junio"));
console.log(estaciones("julio"));
console.log(estaciones("agosto"));
console.log(estaciones("septiembre"));
console.log(estaciones("octubre"));
console.log(estaciones("noviembre"));
console.log(estaciones("diciembre"));
console.log(estaciones("dicmbre"));