const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Show the output with the input base'
    })
    .option('l', {
        alias: 'listing',
        type: 'boolean',
        default: false,
        describe: 'Show the result in console or not'

    })
    .option('u', {
        alias: 'until',
        type: 'number',
        default: 10,
        describe: 'Specifies how far the table will go'
    })
    .check ( (argv) => {
        if ( isNaN( argv.b )) {
            throw 'Error: Base must be a number';
        }

        return true;
    })
    .argv;

    module.exports = argv;