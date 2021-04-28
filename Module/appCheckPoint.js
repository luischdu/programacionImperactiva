let {listaDeEstudiantes , Alumno} = require('./PracticaCheckPoint/PracticaCheckpoint')


/* Curso */

let Carlos = new Alumno("Carlos Mendez", 3, [6,8,3,2,10])

let curso = {
    nombreCurso : 'Programacion Imperactiva',
    notaAprobacion : 7,
    faltasMaximas : 6,
    listaDeEstudiantes,
    agregarAlumno : function (alumno) {
        this.listaDeEstudiantes.push(alumno)        
    }
};


curso.agregarAlumno(Carlos)

console.log(listaDeEstudiantes);


