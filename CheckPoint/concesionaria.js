const autos = require('./autos')

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].patente === patente) {
                return autos[i]
            }
        }
        return null
    },
    venderAuto: function (patente) {
        let autoVendido =[]
        this.buscarAuto(patente).vendido = true;
        autoVendido.push(this.buscarAuto(patente))
        return autoVendido
    },

    autosParaLaVenta: function () {
        let autoDisponible = []
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].vendido == false) {
                autoDisponible.push(this.autos[i])
            }
        }
        return autoDisponible
    },

    autosNuevos : function () {
        let nuevo = []
        let disponible = this.autosParaLaVenta()
        for (let i = 0; i < disponible.length; i++) {
          if (disponible[i].km <= 100) {
            nuevo.push(disponible[i]);
          }
        }
        return nuevo
    },

    listaDeVentas: function () {
        let ventas = []
        ventas.push(this.buscarAuto().precio)
        return ventas
    }


}


console.log('--------Vendiendo--------');
console.log(concesionaria.venderAuto('JJK116'));
/*console.log('------------Disponible--------------');
console.log(concesionaria.autosParaLaVenta());
console.log('------------Cero--------------');
console.log(concesionaria.autosNuevos()); */
console.log('---------prub-------');
let disponible = concesionaria.listaDeVentas()
console.log(disponible);