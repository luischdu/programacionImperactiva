let vaso1 = "Azul";
let vaso2 = "Rojo";
console.log("vaso1: " + vaso1);
console.log("vaso2: " + vaso2);
console.log("______________________");

function intercambiar(v1, v2) {
  const aux = v1;
  v1 = v2;
  v2 = aux;
  const mensaje = "vaso 1: " + v1 + "\nvaso 2: " + v2
  return mensaje;
}

console.log(intercambiar(vaso1, vaso2));