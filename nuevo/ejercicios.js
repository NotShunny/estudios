const productos = [
  { nombre: "iPhone 12", categoria: "Celulares" },
  { nombre: "iPhone 13", categoria: "Celulares" },
  { nombre: "MacBook Air", categoria: "Notebooks" },
  { nombre: "MacBook Pro", categoria: "Notebooks" },
  { nombre: "iPad", categoria: "Tablets" },
  { nombre: "iPad Mini", categoria: "Tablets" }
];

// devolver un objeto que cada propiedad sea la key, la categoria y el value en un arreglo con los nombres de los productos pertenecientes a esa categoria//

let arr = [];

for (let i= 0 ; i < productos.length; i++){
  let recorrer = productos[i]
  if(!arr[recorrer.categoria]){
    arr[recorrer.categoria] = []
  }
  arr[recorrer.categoria].push(recorrer.nombre);
  }

console.log(arr)
