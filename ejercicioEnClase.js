function puedeSubir(altura, acompanante) {

    if (altura > 140 && altura < 200) {
        return true
    } else if (altura > 120 && altura < 140 && acompanante == true) {
        return true
    } else {
        return false
    }

}

console.log(puedeSubir(200, true)); //false
console.log(puedeSubir(145, false)); //true
console.log(puedeSubir(145, true)); //true
console.log(puedeSubir(130, true)); //true
console.log(puedeSubir(130, false)); //false
console.log(puedeSubir(115, true)); //false
console.log(puedeSubir(115, false)); //false
console.log(puedeSubir(210, true)); //false
console.log(puedeSubir(210, false)); //false
