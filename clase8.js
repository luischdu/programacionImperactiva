let participante1 = {
    nombre: 'Lope',
    apellido: 'Suárez',
    edad: 23,
    listaPuntajes: [5, 8, 4, 9, 5],
    agregarPuntaje: function (puntaje) {
        this.listaPuntajes.push(puntaje);
        return `Si nuevo puntaje es ${this.listaPuntajes}`
    },
    puntajePromedio: function () {
        let suma = 0;
        for (let i = 0; i < this.listaPuntajes.length; i++) {
            suma += this.listaPuntajes[i];
        };

        return suma / this.listaPuntajes.length

    }
}

let participante2 = {
    nombre: 'Sara',
    apellido: 'Castillo',
    edad: 23,
    listaPuntajes: [8, 9, 6, 5, 4],
    agregarPuntaje: function (puntaje) {
        this.listaPuntajes.push(puntaje);
        return `Si nuevo puntaje es ${this.listaPuntajes}`
    },
    puntajePromedio: function () {
        let suma = 0;
        for (let i = 0; i < this.listaPuntajes.length; i++) {
            suma += this.listaPuntajes[i];
        };

        return suma / this.listaPuntajes.length

    }
}

let participante3 = {
    nombre: 'Carla',
    apellido: 'Nuñez',
    edad: 23,
    listaPuntajes: [1, 9, 2, 6, 9],
    agregarPuntaje: function (puntaje) {
        this.listaPuntajes.push(puntaje);
        return `Si nuevo puntaje es ${this.listaPuntajes}`
    },
    puntajePromedio: function () {
        let suma = 0;
        for (let i = 0; i < this.listaPuntajes.length; i++) {
            suma += this.listaPuntajes[i];
        };

        return suma / this.listaPuntajes.length

    }
}

function competencia(paticipanteA, paticipanteB, paticipanteC) {

    if (paticipanteA.puntajePromedio() > paticipanteB.puntajePromedio()) {
        return paticipanteA.puntajePromedio() > paticipanteC.puntajePromedio() ? paticipanteA : paticipanteC

    } else {
        return paticipanteB.puntajePromedio() > paticipanteC.puntajePromedio() ? paticipanteC : paticipanteC
    }

}

console.log(competencia(participante1, participante2, participante3));