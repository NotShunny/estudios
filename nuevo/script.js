let Nombre = 'Bran';

let Apellido = 'Rojas';

let Ubicacion = 'Buenos Aires';

let edad = 6;

let YO = edad + 10;

console.log('Hola soy' , Nombre.concat('don') , Apellido);

console.log('Vivo en', Ubicacion, 'y tengo', YO);

let Nacimiento = '22 de Marzo '

let Fecha = Nacimiento + 'de 2008';

console.log('Naci el' , Fecha );

// Ejercicio 1 //

// Tenes que desarrollar un programa el cual calcule cuanto dinero/teca el cliente puede gastar por dia,
// segun cuanto tiempo se quede y cuanto presupuesto tenga.

// Instrucciones:
// Pregunta al usuario la cantidad de días que vas a estar de viaje y almacenálo en una Variable
// Pregunta al usuario el presupuesto total para las vacaciones
// Calculá cuánto podés gastar por noche

// Mostrále el resultado al cliente con un mensaje parecido a:

'Podés gastar XX por dia para que te alcance durante los XX días de viaje.';

let dias = prompt('¿Cuantos dias vas a estar de viaje?');

let Presupuesto_viaje = prompt('¿Cuanto presupuesto tiene para las vacaciones?');

let division = Presupuesto_viaje / dias;

let calcular = dias = division;

alert('Por dia debera gastar ' + calcular ,);
