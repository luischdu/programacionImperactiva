 
let alumno = {
    nombre: "Leandro",
    cantFaltas: 3,
    notas: [10,5,6,7,1],
    promedio: function(){
        let suma = 0
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i]            
        }
        return suma / this.notas.length
    },
    faltar: function(){
        this.cantFaltas++
    },
}
 
function Alumno(nombre, cantFaltas, notas){
    this.nombre = nombre
    this.cantFaltas = cantFaltas
    this.notas = notas
    this.promedio = function(){
        let suma = 0
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i]            
        }
        return suma / this.notas.length
    }
    this.faltar = function(){
        this.cantFaltas++
    }
}
 
let listaEstudiantes = [
    new Alumno("leandro ezequiel", 5, [10,10,8,10,4]),
    new Alumno("Zoe Sobol", 3, [4,10,5,8,10]),
    new Alumno("Nicolas Lopez", 2, [8,9,4,10,10]),
    new Alumno("Nayla Saez", 1, [9,5,6,5,10]),
    new Alumno("Julieta Alfie", 7, [2,8,5,8,8])
]
 
module.exports = {listaEstudiantes, Alumno}
