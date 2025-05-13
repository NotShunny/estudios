// Estructura | Qué es | Cómo accedo
// Objeto | Datos con claves | objeto.propiedad o objeto["propiedad"]
// Array | Lista de elementos | array[índice]

const ventas = [
  { vendedor: "Juan", monto: 200, fecha: "2025-01-10" },
  { vendedor: "Ana", monto: 500, fecha: "2025-01-11" },
  { vendedor: "Juan", monto: 300, fecha: "2025-01-12" },
  { vendedor: "Ana", monto: 100, fecha: "2025-01-13" }
];

// crear una funcion la cual al pasarle la estructura de ventas (arreglo de objetos) , y con eso devolver un objeto que contenga el total de ventas ,
//  el mejor vendedor y el promedio por venta , ejemplo : /* OUTPUT ESPERADO:
// {
//   totalVentas: 1100,
//   mejorVendedor: 'Ana',
//   promedioPorVenta: 275
// }
// */;
function Total(ventas) {

  let objetos = {};  
  let Totalventas = 0;                                // Se crean varias variables que se van a ejecutar mas tarde  //
  let mejorVendedor = '';
  let ventasMaximas = 0;
  
  for (let i = 0; i < ventas.length; i++){
    Totalventas = Totalventas + ventas[i].monto  // Se usa una variable que se creo externamente fuera del for a la cual la llamamos al for y se le suma lo que va a ir recorriendo,
    //  o sea 200+500+300 y asi.//

    if (objetos[ventas[i].vendedor]){ // se llama a objetos[vendedor (en cada vuelta cambia, por ejemplo en la primera valdria juan)]
      objetos[ventas[i].vendedor] = objetos[ventas[i].vendedor] + ventas[i].monto 
    } else {
      objetos[ventas[i].vendedor] = ventas[i].monto; // Como no existe se crea la key que seria juan, despues como value le ponemos el monto inicial que vendria a valer
      // 200, despues va a ir a la 2da vuelta ;//
    };

   if (objetos[ventas[i].vendedor] > ventasMaximas) { // se compara si Objetos[ventas[i].vendedor] es mayor a ventasMaximas que tiene un valor de 0; //
      ventasMaximas = objetos[ventas[i].vendedor]; // A ventas maximas se le iguala a objetos[ventas[i].vendedor] o sea va a ir recorriendo a cada vendedor //
      mejorVendedor = ventas[i].vendedor;  // A mejor vendedor se le iguala a ventas[i].vendedor que vendria a valer Ana //
    }
  }
  let promedioPorVenta = Totalventas / ventas.length; // Se crea una variable que divide el total de las ventas (1100) por el length de ventas (4) dando un total de 275;

  return {Totalventas, mejorVendedor, promedioPorVenta}; // retornamos Total de ventas, al mejor vendedor y el promedio por venta;
}
  
console.log(Total(ventas))
