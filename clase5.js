//Luis M. Chávez

console.log("__________1____________");
// Usando sólo .pop() y .push(), crear una función que reciba un array de 4 elementos por parámetro y retorne un array con los elementos invertidos en su orden: Ej [1,2,3,4] retorna [4,3,2,1]


function arrayInvertido(array) {
    let nuevoArray = [];
    nuevoArray.push(array.pop());
    nuevoArray.push(array.pop());
    nuevoArray.push(array.pop());
    nuevoArray.push(array.pop());
    return nuevoArray
}

console.log(arrayInvertido([1, 2, 3, 4]));
console.log(arrayInvertido(['a', 'b', 'c', 'd']));

console.log("__________2____________");
//Crear una función que recibe un array de 4 elementos con números enteros y devuelve uno que contenga sólo los números pares, si los hubiera. Ej [1,2,3,4] retorna [2,4]

function arrayDePares(array) {
    let nuevoArrayPar = [];
    let nuevoArrayImpar = [];

    array[0] % 2 == 0 ? nuevoArrayPar.push(array[0]) : nuevoArrayImpar.push(array[0]);
    array[1] % 2 == 0 ? nuevoArrayPar.push(array[1]) : nuevoArrayImpar.push(array[1]);
    array[2] % 2 == 0 ? nuevoArrayPar.push(array[2]) : nuevoArrayImpar.push(array[2]);
    array[3] % 2 == 0 ? nuevoArrayPar.push(array[3]) : nuevoArrayImpar.push(array[3]);

    return nuevoArrayPar
}

console.log(arrayDePares([1, 2, 3, 4]));
console.log(arrayDePares([6, 7, 8, 10]));

console.log("__________3____________");
//Crear una función que recibe 2 parámetros, un texto con un tipo de dato de JS y  un array de 4 elementos; retorna un booleano que indica si todos los elementos son del tipo de dato que se envió por parámetro. Ej: tipoArray(“number”, [1,2,3,4]) retorna true; tipoArray(“number”, [1,2,”hola”,,4]) retorna false.

function arrayTipo(tipoDeDato, array) {
    let condicion;
    if (typeof array[0] === tipoDeDato && typeof array[1] === tipoDeDato && typeof array[2] === tipoDeDato && typeof array[3] === tipoDeDato) {
        condicion = true;
    } else {
        condicion = false;
    }
    return condicion
}

console.log(arrayTipo("number", [1, 2, 3, 4]));
console.log(arrayTipo("string", ["casa", "cerceza", "juego", "viaje"]));
console.log(arrayTipo("number", [1, 2, "hola", 4]));
console.log(arrayTipo("string", ["casa", 8, "juego", "viaje"]));

console.log("__________4____________");
//Crear una función que recibe un array con números enteros y devuelve uno que contenga la suma acumulada de todos sus números. Usar la función tipoArray para validar que el array es de números, en caso que no, salir de la función antes de acumular con el mensaje "Error: array corrupto"
function sumarArray(arrayParaSumar) {
    let suma;
    arrayTipo("number", arrayParaSumar) == true ? suma = arrayParaSumar[0] + arrayParaSumar[1] + arrayParaSumar[2] + arrayParaSumar[3] : suma = "Error: array corrupto";
    condicion = suma;
    return condicion 
}

console.log(sumarArray([1, 2, 3, 4]));
console.log(sumarArray([1, 2, "hola", 4]));
console.log(sumarArray([34, 21, 172, 1]));
console.log(sumarArray(["casa", 8, "juego", "viaje"]));

console.log("__________5____________");
//Así como el ejercicio 4 usa dos funciones aquí creadas, crear un ejercicio que utilice las 4 funciones aquí creadas. Ej función que recibe array, acumula sólo aquellos elementos pares y los invierte solo si son números enteros. Otro ejemplo puede ser el uso de letras y palabras para combinarlas en frase irracionales.
function SuperFuncion([var1, var2, var3, var4]) {
    let array = [var1, var2, var3, var4];
    let condicion;
    let invertir;
    let sumar;
    let parOimpar;
    const tipoDeDato = "number";

    if (typeof array[0] === tipoDeDato && typeof array[1] === tipoDeDato && typeof array[2] === tipoDeDato && typeof array[3] === tipoDeDato) {

        arrayInvertido(array);
        function arrayInvertido(array) {
            let nuevoArray = [];
            let elemen4 = array.pop();
            let element3 = array.pop();
            let element2 = array.pop();
            let element1 = array.pop();
            nuevoArray.push(elemen4);
            nuevoArray.push(element3);
            nuevoArray.push(element2);
            nuevoArray.push(element1);
            invertir = nuevoArray;
            return invertir;
        }

        sumarArray([var1, var2, var3, var4]);
        function sumarArray(arrayParaSumar) {
            let suma = [];
            suma = arrayParaSumar[0] + arrayParaSumar[1] + arrayParaSumar[2] + arrayParaSumar[3];
            sumar = suma;
            return sumar;
        }

        arrayDePares([var1, var2, var3, var4]);
        function arrayDePares(arrayParaClasificar) {
            let nuevoArrayPar = [];
            let nuevoArrayImpar = [];
            arrayParaClasificar[0] % 2 == 0 ? nuevoArrayPar.push(arrayParaClasificar[0]) : nuevoArrayImpar.push(arrayParaClasificar[0]);
            arrayParaClasificar[1] % 2 == 0 ? nuevoArrayPar.push(arrayParaClasificar[1]) : nuevoArrayImpar.push(arrayParaClasificar[1]);
            arrayParaClasificar[2] % 2 == 0 ? nuevoArrayPar.push(arrayParaClasificar[2]) : nuevoArrayImpar.push(arrayParaClasificar[2]);
            arrayParaClasificar[3] % 2 == 0 ? nuevoArrayPar.push(arrayParaClasificar[3]) : nuevoArrayImpar.push(arrayParaClasificar[3]);

            return nuevoArrayPar.length === 0 ? parOimpar = "Su array no tiene pares solo impares [" + nuevoArrayImpar + "]" : parOimpar = "Los pares de su array son: [" + nuevoArrayPar + "]";

            return parOimpar;
        }

        condicion = "Hola su array [" + [var1, var2, var3, var4] + "] al invertirse queda así: [" + invertir + "] y su suma es: " + sumar + ". " + parOimpar;

    } else {

        arrayInvertido(array);
        function arrayInvertido(array) {
            let nuevoArray = [];
            nuevoArray.push(array.pop());
            nuevoArray.push(array.pop());
            nuevoArray.push(array.pop());
            nuevoArray.push(array.pop());
            invertir = nuevoArray;
            return invertir;

        }

        condicion = "Su array contiene elementos -string-, su array irracional queda así: [" + invertir + "]";
    }
    return condicion
}

console.log(SuperFuncion([1, 2, 3, 4]));
console.log(SuperFuncion([89, 1, 3, 4]));
console.log(SuperFuncion([9, 13, 233, 7]));
console.log(SuperFuncion([1, 2, "hola", 4]));
console.log(SuperFuncion(["casa", "cacaute", "juego", "viaje"]));