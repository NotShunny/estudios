// registrar alumnos y calcular el promedio //
// // Instrucción : Permite ingresar alumnos con su nombre y calificacion. Agrega los alumnos a un arreglo //
// // y calcula el promedio de las calificaciones //

// let alumnos = []

// let sumar = 0;

// let añadirAlumnos = 'Si';

// while (añadirAlumnos == 'Si') {
//       let preguntarAlumno = prompt('¿Cual es su nombre?');
//       let preguntarCalificacion = prompt('¿Cual es su calificacion?');
//       const ObjAlumnos = {
//             nombre : preguntarAlumno,
//             calificacion : preguntarCalificacion
//       };
//      // Con los datos de las dos preguntas armar el objeto alumno
//      // Y guardar el objeto alumno en el arreglo alumnos 
//      alumnos.push(ObjAlumnos);
//       añadirAlumnos = prompt('¿Quiere seguir añadiendo?');   
// }

// if (alumnos.length > 0) {
//       for(let i = 0; i < alumnos.length; i ++){
//             sumar = sumar + alumnos[i].calificacion;
//       }
//       let calcularPromedio = sumar / alumnos.length;
//       console.log(`El promedio de los alumnos es ${calcularPromedio}`);
// }
// //Si el cliente pone que no devolver el promedio de todos los alumnos //
