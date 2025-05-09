// Estructura | Qué es | Cómo accedo
// Objeto | Datos con claves | objeto.propiedad o objeto["propiedad"]
// Array | Lista de elementos | array[índice]

const evaluaciones = [
  { curso: "JS", puntaje: 9 },
  { curso: "React", puntaje: 10 },
  { curso: "JS", puntaje: 7 },
  { curso: "React", puntaje: 8 },
  { curso: "Python", puntaje: 10 },
];

/*
Output esperado:
[
  { curso: 'JS', promedio: 8 },
  { curso: 'React', promedio: 9 },
  { curso: 'Python', promedio: 10 }
]
*/
let objetos = {}
let array = []

for (let i = 0; i < evaluaciones.length; i++){

if (objetos[evaluaciones[i].curso]){
  objetos[evaluaciones[i].curso].suma += evaluaciones[i].puntaje
  objetos[evaluaciones[i].curso].cantidad += 1
} else {
objetos[evaluaciones[i].curso] = {suma : evaluaciones[i].puntaje, cantidad: 1}
}
}

console.log(objetos)

let keys = Object.keys(objetos);

for (let i = 0; i < keys.length; i++){
  let curso = keys[i];
  let promedio = objetos[curso].suma / objetos[curso].cantidad;
  array.push({curso : curso, promedio: promedio});
}

console.log(array)
