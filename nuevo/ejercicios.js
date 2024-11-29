// Ejercicio 1: Verificar si una persona es mayor de edad
// Instrucción: Dado un objeto con los datos de una persona, verifica si es mayor de edad.
// const persona = { nombre: 'Bran', edad: 18 };

// if (persona.edad <= 18) {
//   console.log(`${persona.nombre} sos mayor`);
// } else {
//   console.log(`${persona.nombre} sos menor`);
// };



// // Ejercicio 3: Buscar un producto en una lista
// // Instrucción: Dado un arreglo de objetos que representan productos, verifica si un producto específico existe en la lista.

// const productos = [
//   { nombre: 'Manzana', precio: 4 },
//   { nombre: 'Banana', precio: 18 },
//   { nombre: 'Naranja', precio: 12 },
// ];
// const buscar='Naranja';

// for (let i = 0; i < productos.length ; i ++) {
//   if (productos[i].nombre == buscar) {
//     console.log(`${productos[i].nombre} se encuentra disponible`);
//   } 
// }



// // Ejercicio 4: Sumar precios de productos
// // Instrucción: Dado un arreglo de objetos que representan productos con precios, calcula el precio total.

// let sumar = 0;

// for (let i = 0; i < productos.length ; i ++) {
//   sumar = sumar + productos[i].precio;
// }

// console.log(sumar);


// Filtrar productos baratos
// Instrucción: Dado un arreglo de objetos que representan productos, crea un nuevo arreglo con
//  los productos cuyo precio sea menor a 5.
// const productos2 = [
//   { nombre: 'Manzana', precio: 12 },
//   { nombre: 'Banana', precio: 1 },
//   { nombre: 'Naranja', precio: 3 },
//   { nombre: 'Mango', precio:4},
// ];

// for (let i = 0; i < productos2.length; i ++) {
//  if (productos2[i].precio < 7){
//    console.log(`${productos2[i].nombre} vale ${productos2[i].precio}`);
//  }
// }






// // Ejercicio 5: Determinar el día más frío
// // Instrucción: Dado un arreglo de objetos que representan días y temperaturas, encuentra el día con 
// la temperatura más baja.

// const temperaturas = [
//   { dia: 'Lunes', temp: 20 },
//   { dia: 'Martes', temp: 15 },
//   { dia: 'Miércoles', temp: 10 },
// ];

// let temperaturaFria = temperaturas[0].temp;

// let diatemperaturaFria = temperaturas[0].dia;

// for (let i = 0; i < temperaturas.length; i ++) {
//   if (temperaturas[i].temp < temperaturaFria) {
//     temperaturaFria = temperaturas[i].temp;
//     diatemperaturaFria = temperaturas[i].dia;
//   }
// } 
// console.log(`el dia más frio es ${diatemperaturaFria} con ${temperaturaFria}° grados`);







// Instrucción: Dado un arreglo de objetos, actualiza el precio de un producto específico al 
// encontrarlo por su nombre.
// const productos3 = [
//   { nombre: 'Manzana', precio: 1 },
//   { nombre: 'Banana', precio: 0.5 },
//   { nombre: 'Naranja', precio: 0.75 },
// ];

// let cambiar = productos3[0].precio;
// let nombreproducto = productos3[0].nombre;

// for (let i = 0; i < productos3.length; i ++) {
//   if (productos3[i].precio < cambiar)  {
//      cambiar = productos3[i].precio = 2;
//      nombreproducto = productos3[i].nombre;
//   }
// }

// console.log(nombreproducto ,'vale' , cambiar,'$');

//Cambiar precio de naranja a: 2

