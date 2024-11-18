
const simularKeys = { 
  modelo: 'key1',
  ejemplo: 'key2',
  regular: 'key3',

  keys: ['modelo', 'ejemplo', 'regular'],

  simularKey: function(Simularlo) {
    console.log('Keys:' , this.keys);
  }
};

console.log(simularKeys.simularKey());

const simularValue = {
  Nombre : 'Jose',
  apellido : 'Jose',
  edad : '42',

  valores : ['Jose' , 'Jose', '42'],

  funciones : function(Valor) {
    console.log('valores:', this.valores);
  },
};

console.log(simularValue.funciones());
