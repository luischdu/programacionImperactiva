let horariosPartida = [12, 14, 18, 21]
let horariosAtrasados = horariosPartida.map((numero) => numero - 1)
// console.log(horariosAtrasados);

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter((nota) => nota.promedio >= 7)

let desaprobados = estudiantes.filter((nota) => nota.promedio < 7)

// console.log(aprobados);
// console.log(desaprobados);

let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce((numero, vuelta) => numero + vuelta)
// console.log(totalVueltas);


let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach((lista) => console.log(lista));
