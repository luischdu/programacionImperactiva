function suma(n1, n2) {
    return n1 + n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function multiplicacion(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    if (n2 === 0) {
        console.log('No se puede dividir por cero, ingrese otro numero');
    } else {
        return n1 / n2;
    }
}
let n1 = 6;
let n2 = 9;
console.log("Las operaciones realizadas son: \n- de la suma: " + suma(n1, n2) + "\n- de la resta: " + resta(n1, n2) + "\n- de la multiplicacion: " + multiplicacion(n1, n2) + "\n- de la division: " + division(n1, n2));