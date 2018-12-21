// requireds
const fs = require('fs');
const { colors } = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('====================='.green);
    console.log('===Tabla de ${base}=='.green);
    console.log('====================='.green);
    //Muestra en consola la tabla en base al limite
    for (let i = 1; i <= limite; i++) {
        data = `${base} * ${i} = ${i * base}`;
        console.log(data);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`)
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${ limite }.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}