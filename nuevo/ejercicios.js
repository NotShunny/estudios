// Dado un array de productos, usa .filter() para quedarte con los productos disponibles (stock > 0) 
// y luego usa .map() para crear un array de strings que contengan el nombre del producto y su precio.

const productos = [
    { nombre: "iPhone", precio: 1000, stock: 5 },
    { nombre: "Samsung", precio: 800, stock: 0 },
    { nombre: "Xiaomi", precio: 500, stock: 10 },
  ];

  // Resultado esperado: ["iPhone - $1000", "Xiaomi - $500"]

let destacar = productos.filter(function (elementos) {
  return elementos.stock > 0
})

console.log(destacar)

let mapeado = destacar.map(function (elementos) {
  return [elementos.nombre + "-" + elementos.precio]
});

console.log(`${mapeado}`);

