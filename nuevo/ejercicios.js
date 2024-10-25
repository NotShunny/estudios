// Ejercicio 4 pero con function //


let primer_numero = prompt('Pon el primer numero');
let segundo_numero = prompt('El segundo numero');

let primerNumeroParseado = parseInt(primer_numero);
let segundoNumeroParseado = parseInt(segundo_numero);

let calculo = prompt('Que desea realizar? /, +, *, - ?');

function sumar(primerNumeroParseado, segundoNumeroParseado) {
    alert(`La operacion es sumar y el resultado es:  ${primerNumeroParseado + segundoNumeroParseado}`);
}

function restar(primerNumeroParseado, segundoNumeroParseado) {
    alert(`La operacion es restar y el resultado es: ${primerNumeroParseado - segundoNumeroParseado}` );
}

function multiplicar(primerNumeroParseado , segundoNumeroParseado) {
    alert(`La operacion es multiplicacion y el resultado es : ${primerNumeroParseado * segundoNumeroParseado}`);
}
function dividir(primerNumeroParseado , segundoNumeroParseado) {
    alert(`La operacion es division y el resultado es: ${primerNumeroParseado / segundoNumeroParseado}`);
}
// +
// -
// *
// /

if (calculo === '+') {
 sumar(primerNumeroParseado, segundoNumeroParseado);
} else if (calculo === '-') {
   restar(primerNumeroParseado, segundoNumeroParseado);
} else if (calculo === '*') {
 multiplicar(primerNumeroParseado, segundoNumeroParseado);
} else if (calculo === '/') {
 dividir(primerNumeroParseado, segundoNumeroParseado);
} else {
  alert('No existe la operacion que ingresaste...');
}
