let numeros = [26, 3, 4, 89, 23, 67, 34, 89, 23, 65, 76, 12, 65, 76, 2, 3, 8, 6, 3,];


            
            let dobles = numeros.map(function (numero) {
                console.log('Numeros:' , numero); //Logeamos lo que va a salir por la consola//
                return numero * 2; //lo que nos tiene que devolver que es un tipo number y la multiplicacion por 2 de todo el array de numeros.
              });

              console.log('Numeros multiplicados :' , dobles); // se ejecuta afuera de la variante dobles para que se ejecute//

              let divididos = numeros.map(function (numero) {
                console.log('Numeros antes de la division:' , numero);
                return numero / 2
                
              });

              console.log('Despues de la division:' , divididos);
