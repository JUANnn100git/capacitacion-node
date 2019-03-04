const { crearArchivo } = require('./multiplicar/multiplicar');


// console.log(module);
// console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];



crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
    .catch(e => console.log(e));