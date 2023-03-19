const colors = require('colors');
const { resolve } = require('path');
const { stdin } = require('process');

const MostrarMenu = ()=>{
    return new Promise((resolve)=>{
        console.clear();
        console.log(`====================================================`.green)
        console.log('==============='.green + ' Aplicación de Tareas '+ '==============='.green)
        console.log(`====================================================\n`.green)

        console.log(`${'1- '.green} Crear tarea`);
        console.log(`${'2- '.green} Listar tarea`);
        console.log(`${'3- '.green} Listar tareas completadas`);
        console.log(`${'4- '.green} Listar tareas incompletas`);
        console.log(`${'5- '.green} Completar tarea`);
        console.log(`${'5- '.green} Eliminar tarea`);
        console.log(`${'0- '.yellow} Salir \n`);

        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
        readline.question('Seleccione una opción: ',(opt)=>{
            readline.close();
            resolve(opt);
        })
    })
    
}
const pausa = ()=>{
    return new Promise((resolve)=>{
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
        readline.question(`\nPresione ${'ENTER'.green} para continuar \n`,()=>{
            readline.close();
            resolve()
        })
    })
}
module.exports= {
    MostrarMenu,
    pausa
}