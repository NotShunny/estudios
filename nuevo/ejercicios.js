// // Ejercicio 8: Inventario de productos
// // Instrucción: Permite al usuario agregar productos a un inventario y luego buscar productos por nombre

let productos = [];

let ingresarProducto = 'Si';

let Preguntar = prompt('¿Va a seguir ingresando productos?');

while(Preguntar == 'Si') {
    let ingresar = prompt('¿Que vas a meter?')
    let precioProducto = prompt('Cual es el precio?')
    const inventario = {
        nombre : ingresar,
        precio : precioProducto
    }
    productos.push(inventario);
    Preguntar = prompt('¿Va a seguir ingresando productos?');
}


let productoBuscado = prompt('¿Que producto esta buscando?');


for(let i = 0; i < productos.length; i++) {
   
    if (productoBuscado == productos[i].nombre) {
        console.log(`el producto buscado es ${productos[i].nombre} y el precio es ${productos[i].precio}`)
    } else {
        console.log('El producto buscado no esta');
    }
}

