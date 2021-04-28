function abbrevName(name = "") {
let  array = name.split(" ");
let primerLetra = array[0].charAt(0);
let segundaLetra = array[1].charAt(0);
return primerLetra + "."+ segundaLetra;   
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Eve Cole"));
console.log(abbrevName("Luis Chávez"));