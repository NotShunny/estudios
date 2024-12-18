// Seguimiento de Calorías Diarias
// Objetivo: Diseñar un programa que registre las calorías consumidas durante el día
//  en diferentes comidas (desayuno, almuerzo, cena, snacks) y calcule estadísticas importantes como:

// El total de calorías consumidas en el día.
// La comida con mayor aporte calórico.
// La comida con menor aporte calórico.
// El promedio de calorías consumidas por comida.
// Instrucciones detalladas:
// Registro de datos:
// Permite al usuario registrar calorías indicando primero el tipo de comida 
// (por ejemplo: desayuno, almuerzo, cena o snack) y luego el valor de calorías consumidas.

// Validación de entradas:
// Asegúrate de que el usuario solo pueda ingresar números positivos para 
// las calorías y seleccionar una categoría válida de comida.

// Al ingresar las comidas tiene que tener el nombre de la comida,
//  a que grupo pertenece(desayuno, almuerzo, etc) y cuantas calorias tiene

// let comidas = [];

// let confirmar = 'Si';

// while (confirmar == 'Si') {
//     let comida = prompt('¿Como se llama la comida que estas ingresando?');
//     let calorias = parseFloat(prompt('¿Cuantas calorias son?'));
//     let tipoComida = prompt('¿A que grupo lo clasificarias? (Desayuno, almuerzo, cena o snack)');

//     const consumido = {
//         comida : comida,
//         grupo : tipoComida, 
//         calorias : calorias
//     };

//     comidas.push(consumido);

//     confirmar = prompt('¿Quieres seguir ingresando? (Si/No)');
// }

// if (comidas.length > 0) {
//     let totalCalorias = 0; 

//     let comidaMaxima = comidas[0];

//      let comidaMinima = comidas[0];

//       for (let i = 0; i < comidas.length; i++) {

//          totalCalorias += comidas[i].calorias;

//           if (comidas[i].calorias > comidaMaxima.calorias) {
//              comidaMaxima = comidas[i];
//              } 
//              if (comidas[i].calorias < comidaMinima.calorias) { 
//                 comidaMinima = comidas[i];
//              }
//       } 
//       let promedioCalorias = totalCalorias / comidas.length;
// console.log(`Total de calorías consumidas en el día: ${totalCalorias}`);

// console.log(`La comida con mayor aporte calórico: ${comidaMaxima.comida} con un total de ${comidaMaxima.calorias} calorías`);

// console.log(`La comida con menor aporte calórico: ${comidaMinima.comida} con un total de ${comidaMinima.calorias} calorías`);

// console.log(`el total de calorias consumidas es ${promedioCalorias}`);
//    } else { 
//     console.log('No se registraron comidas.');
//  }





