function Estudiante(nombre, cantFaltas, notas){
    this.nombre = nombre;
    this.cantFaltas = cantFaltas;
    this.notas = notas;
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
 
let estudiantes = [
    new Estudiante("Agus Pasqualis", 5, [10,10,8,10,4]),
    new Estudiante("Angel Vargas", 3, [4,10,5,8,10]),
    new Estudiante("Ana Belen", 2, [8,9,4,10,10]),
    new Estudiante("Carlos Naranjo", 1, [9,5,6,5,10]),
    new Estudiante("Catalina Forgione", 7, [2,8,5,8,8])
]
 
module.exports = estudiantes