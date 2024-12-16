// Generar estadisticas de ventas //
// Instrucción: Permite al usuario registrar ventas y calcula el total vendido,
//  la venta más alta y la más baja.

let ventas = [];

let confirmar = 'Si';

while (confirmar == 'Si') {
    let nombreProducto = prompt('Como se llama el producto?')
    let valorVenta = prompt('A cuanto?:');
    const venta = {
        producto: nombreProducto,
        monto : valorVenta
    };
    ventas.push(venta);
    confirmar = prompt('Queres ingresar otra venta? (Solo responder Si o no)');
}

if (ventas.length > 0) {
    let totalVendido = 0;
     let ventaMaxima = ventas[0].monto; 
     let ventaMinima = ventas[0].monto;
     let productoMaximo = ventas[0].producto;
     let productoMinimo = ventas[0].producto;

     for (let i = 0; i < ventas.length; i++) {
        totalVendido += ventas[i].monto;
         if (ventas[i] > ventaMaxima) { 
            ventaMaxima = ventas[i].monto; 
            productoMaximo = ventas[i].producto;
        }
        if (ventas[i] < ventaMinima) { 
            ventaMinima = ventas[i].monto;
            productoMinimo = ventas[i].producto; 
        } 
    }

console.log(`Lo que se vendio en total fue : ${totalVendido} `);
console.log(`La venta más alta fue : ${ventaMaxima} y fue ${productoMaximo}`);
console.log(`la venta más baja fue : ${ventaMinima} lo que vendiste fue una ${productoMinimo}`);
} else { 
    console.log('No vendio nada?');
}

// Presenta un error que no logro arreglar, al trabajar con numeros grandes da una suma grande
// Como 1500 + 3200 , empieza con 000 y sigue.


// luego preguntarle al usuario si quiere o no quiere agregar mas, y de ahi devolverler
//  los datos correspondientes



