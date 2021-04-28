let doble = numero => numero * 2;
console.log(doble(3) + doble(6));

console.log("________________");

let miMostrador = parametro => console.log(parametro);
let miMostrador2 = parametro => console.log("El resultado es: " + parametro);
function miCalculadora(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}
miCalculadora(5, 5, miMostrador);
miCalculadora(5, 5, miMostrador2);

console.log("________________");
