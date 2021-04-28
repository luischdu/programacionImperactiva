/*for (let i = 0; i <= 10; i++) {
    console.log('la tabla de 7*'+i+'='+7*i);
    
}*/


function noParesDeContarImparesHasta(numero) {
    let contador = 0;
    for (let i = 0; i <= numero; i++) {
        let valor = i % 2;

        if (valor == 0) {
            false
        } else {
            contador = contador + 1;
        }
    }
    return console.log(contador);
}

noParesDeContarImparesHasta(4);