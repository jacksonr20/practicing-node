const { argv } = require('yargs');
const { createFile } = require('./helpers/multiplicar');

console.clear();

createFile( argv.b, argv.l, argv.u )
.then( fileName => console.log( fileName, 'Created successfully' ))
.catch( err => console.log( err ));