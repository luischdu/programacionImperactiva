 
const {listaEstudiantes, Alumno} = require("./alumno")
 
let fernando = new Alumno("fernando", 0, [4,8,9,3,10])
 
 
let curso = {
    nombreDelCurso: "JavaScript",
    notaAprobacion: 7,
    faltasMaximas: 4,
    listaEstudiantes,
    agregarAlumno: function(alumno){
        this.listaEstudiantes.push(alumno)
    },
    aprobado: function(alumno){
        let promedio = alumno.promedio();
        if(promedio > this.notaAprobacion && alumno.cantFaltas < this.faltasMaximas ){
            return true;
        } else if(alumno.cantFaltas === this.faltasMaximas && promedio >= this.notaAprobacion + (this.notaAprobacion * 0.1)){
            return true;
        } else{
            return false;
        }
    },
    listaAprobados: function(){
        let result = []
        for (let i = 0; i < this.listaEstudiantes.length; i++) {
            result.push(this.cursoAprobado(this.listaEstudiantes[i]))
        }
        return result
    }
}
curso.agregarAlumno(fernando)
console.log(listaEstudiantes);