let nombreJugador = "James Rodríguez";
let precioEnDolares = 0;
let golesJugador = 0;

function jugador() {
    golesJugador = ++golesJugador
    precioEnDolares += 10000
    console.log('GOOOOOOOOL! de ' + nombreJugador + '. Cantidad de goles: ' + golesJugador + ' y precio: ' + precioEnDolares)
}


jugador()
jugador()
jugador()
jugador()
jugador()