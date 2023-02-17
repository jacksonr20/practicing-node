const fs = require('fs');
const colors = require('colors');


const createFile = async( base  = 4, listing = false, until = 10) => {

    try {
        let output = '';
        let consoleOutput = '';
    
        for (let i = 0; i <= until; i++) {
            output += `${ base } x ${ i } = ${ base * i }\n`;
            consoleOutput += `${ base } ${ `x`.blue } ${ i } ${ `=`.green } ${ base * i }\n`;
        }

        if (listing) {
            console.log("========================".blue);
            console.log(`   TABLA DEL ${ base }  `.rainbow);
            console.log("========================".blue);

            console.log( consoleOutput, '\n', listing );
        }
        
        fs.writeFileSync(`./output/Tabla-${ base }.txt`, output);
    
        return `Tabla-${ base }.txt created`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createFile,
}