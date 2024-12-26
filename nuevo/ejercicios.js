// Crea un inventario de productos donde puedas agregar, buscar, eliminar y listar productos.

// Linea 15 a 18 //
let inventario = [];

let preguntar1 = 'Si';



while (preguntar1 == 'Si') {
    let preguntar = prompt('¿Que queres hacer? (agregar , buscar, eliminar, listar)');
    
    for (let i = 0; i <= inventario.length; i ++) {
        
        if (preguntar == 'agregar') {
        let añadirProductos = prompt('¿Que producto quieres añadir?') 
        inventario.push(añadirProductos);
        console.log(`Producto añadido ${añadirProductos}`)
        } else if (preguntar == 'buscar') {
            let buscar = prompt('¿Que producto estas buscando?');
             let buscando = inventario.find((producto) => buscar == producto);
              if (buscando) {
             console.log(`El producto que se busco fue ${buscar}`);
            } else {
                console.log('El producto no se encuentra o no existe');
            }

        } else if (preguntar == 'eliminar') {
            let eliminar = prompt('Que queres eliminar?');
            let eliminado = inventario.filter((producto) => eliminar != producto);
            if (eliminado) {
                console.log(`quedaria ${inventario}`);
            }
        } else if (preguntar == 'listar') {
            console.log(inventario);
        }
}

    preguntar1 = prompt('¿Quieres seguir? (Si/No)');
};





