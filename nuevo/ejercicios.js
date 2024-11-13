// Tenes una veterinaria
// Necesitas administrar los animales
// Perros, Gatos y conejos
//  3        4        2
// nombre especie edad alimento tamanio accion

const veterinaria1 = {
    nombre: 'Dogi',
    especie : 'Perro',
    edad : '3 años',
    alimento : 'Old Prince',
    tamaño : '60cm',
    accion : 'ladrando',

    presentacion : function(presentarse) {
     console.log('Este es' , this.nombre , 'Es un', this.especie, 'tiene' , this.edad, 'Prefiere comer' , this.alimento,
        'mide aproximadamente unos' , this.tamaño , 'se la pasa' , this.accion );
    },
};

console.log(veterinaria1.presentacion());

const veterinaria2 = {
    nombre: 'Coco',
    especie : 'perro',
    edad : '5 años',
    alimento : 'Eukanuba',
    tamaño : '24cm',
    accion : 'ladrando, comiendo y duermiendo',

    presentacion2 : function(presentarse) { 
        console.log('Este es' , this.nombre , 'Es un', this.especie, 'tiene' , this.edad, 'Prefiere comer' , this.alimento,
            'mide aproximadamente unos' , this.tamaño , 'se la pasa' , this.accion );

    },

};

console.log(veterinaria2.presentacion2());

const veterinaria3 = {
    nombre: 'Roky',
    especie : 'perro',
    edad : '6 Meses',
    alimento : 'Comida para cachorritos',
    tamaño : '15cm',
    accion : 'ladrando',

    presentacion3 : function(presentarse) { 
        console.log('Este es' , this.nombre , 'Es un', this.especie, 'tiene' , this.edad, 'Prefiere comer' , this.alimento,
            'mide aproximadamente unos' , this.tamaño , 'se la pasa' , this.accion );

    },

};

console.log(veterinaria3.presentacion3());

const veterinariaGatos = {
    nombre: 'Misha',
    especie : 'gata',
    edad : '2 años',
    alimento : 'Catpro',
    tamaño : '23cm',
    accion : 'maullando',

    presentaciongata : function(presentarse) { 
        console.log('Esta es' , this.nombre , 'Es una', this.especie, 'tiene' , this.edad, 'su alimento favorito es' , this.alimento,
            'mide aproximadamente unos' , this.tamaño , 'se la pasa' , this.accion );

    },

};

console.log(veterinariaGatos.presentaciongata());

const veterinariaGatos2 = {
    nombre : 'Nieves',
    especie : 'Gato',
    edad : '1 año',
    alimento : 'Whiskas',
    tamaño : '24cm',
    accion : 'Maulla',

    presentacionGato : function(presentacion) {
        console.log('Este es' , this.nombre , 'Es un', this.especie, 'tiene' , this.edad, 'Come' , this.alimento,
            'mide aproximadamente unos' , this.tamaño , 'De vez en cuando' , this.accion );
    },
};

console.log(veterinariaGatos2.presentacionGato());

const veterinariaG3 = {
    nombre: 'Jin',
    especie : 'gato',
    edad : '7 años',
    alimento : 'Whiskas',
    tamaño : '25cm',
    accion : 'maulla',

    presentacionG3 : function(presentacion) {
        console.log('El es' , this.nombre , 'es un' , this.especie, 'es algo viejito' , this.edad , 'le gusta' , this.alimento,
            'mide alrededor de' , this.tamaño , 'algunas veces' , this.accion );
        
    },
};

console.log(veterinariaG3.presentacionG3());

const veterinariaG4 = {
    nombre : 'Pingles',
    especie : 'gato',
    edad : '4 meses',
    alimento : 'Royal canin',
    tamaño : '17cm',
    accion : 'maulla',

    presentacionG4 : function(presentacion) {
        console.log('El es' , this.nombre , 'es un' , this.especie, 'es chico todavia' , this.edad , 'le gusta' , this.alimento,
            'mide alrededor de' , this.tamaño , 'algunas veces' , this.accion );
    },
};

console.log(veterinariaG4.presentacionG4());

const Conejo = {
    nombre : 'Rabit',
    especie : 'Conejo',
    edad : '1 año',
    alimento : 'Zanahoria',
    tamaño : '34cm',
    accion : 'mueve las orejas y pega saltos',

    presentacionConejo : function(presentarse) {
        console.log('Este es' , this.nombre , 'es un' , this.especie , 'es joven todavia, tiene' , this.edad , 'le encanta comer' , this.alimento,
            'mide aproximadamente unos' , this.tamaño, ',' , this.accion
        );
    },
};

console.log(Conejo.presentacionConejo());

const Conejo2 = {
    nombre : 'Carlitos',
    especie : 'Conejo',
    edad : '2 años',
    alimento : 'Zanahorias',
    tamaño : '42cm',
    accion : 'salta',

    presentacionConejo2 : function(presentarseC2) {
        console.log('Este es' , this.nombre , 'es un' , this.especie , 'tiene unos' , this.edad , 'le encanta comer' , this.alimento,
            'mide cerca de' , this.tamaño, ',' , this.accion);
    },
};

console.log(Conejo2.presentacionConejo2());
