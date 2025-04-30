// Estructura | Qué es | Cómo accedo
// Objeto | Datos con claves | objeto.propiedad o objeto["propiedad"]
// Array | Lista de elementos | array[índice]



// Agrupar productos por categoría
// Consigna:
// Dado un arreglo de productos con "nombre" y "categoria",
// devolver un objeto donde cada propiedad sea una categoría
// y el valor un arreglo con los nombres de los productos de esa categoría.

const productos = [
  { nombre: "Leche", categoria: "Alimentos" },
  { nombre: "Camiseta", categoria: "Ropa" },
  { nombre: "Pan", categoria: "Alimentos" },
  { nombre: "Pantalón", categoria: "Ropa" },
];

// Output esperado:
// {
//   Alimentos: ["Leche", "Pan"],
//   Ropa: ["Camiseta", "Pantalón"]
// }

let resultado = {};

for (let i = 0; i < productos.length; i++){
if (!resultado[productos[i].categoria]){
resultado[productos[i].categoria] = [productos[i].nombre]
} else {
  resultado[productos[i].categoria].push(productos[i].nombre)
}

};

console.log(resultado)

//////////////////////////////////////////////////////////////////////////.////////////////.////////////////////////./////////////////

// Ejercicio 4 - Contar usuarios por país
// Consigna:
// Dado un arreglo de usuarios con propiedad "pais",
// devolver un objeto con la cantidad de usuarios por cada país.

const usuariosPais = [
  { nombre: "María", pais: "Argentina" },
  { nombre: "John", pais: "USA" },
  { nombre: "Lucía", pais: "Argentina" },
  { nombre: "Carlos", pais: "México" },
];


// Output esperado:
// {
//   Argentina: 2,
//   USA: 1,
//   México: 1
// }


let objetos = {}

for (let i = 0; i < usuariosPais.length; i++){
  if (objetos[usuariosPais[i].pais]){
    objetos[usuariosPais[i].pais] = objetos[usuariosPais[i].pais] +1
  } else {
    objetos[usuariosPais[i].pais] = 1
  }
}

console.log(objetos)
