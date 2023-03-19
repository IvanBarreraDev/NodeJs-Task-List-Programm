//const inquirer = import('inquirer');
const inquirer = require('inquirer');
const color = require('colors');
const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'Selecciona una opción:',
        choices:[
            {
                value:1,
                name:`${'1- '.green} Crear tarea`},
            {
                value:2,
                name:`${'2- '.green} Listar tarea`},

            {
                value:3,
                name:`${'3- '.green} Listar tareas completadas`},
            {
                value:4,
                name:`${'4- '.green} Listar tareas incompletas`},
            {
                value:5,
                name:`${'5- '.green} Completar tarea`},
            {
                value:6,
                name:`${'6- '.green} Eliminar tarea`},
            {
                value:0,
                name:`${'0- '.yellow} Salir`}
        ]
    }
]

const inquirerMenu = async()=>{
    console.clear();
    console.log(`====================================================`.green)
    console.log('==============='.green + ' Aplicación de Tareas '+ '==============='.green)
    console.log(`====================================================\n`.green)
    const {opcion}= await inquirer.prompt(preguntas);
    return opcion;
     
}
const pausa = async()=>{
    const preguntaPausa = [{
        name:'confirm',
        type:'input',
        message:`Presione ${'ENTER'.green} para continuar`
    }];
    console.log('\n');
    await inquirer.prompt(preguntaPausa);
}

module.exports= {
    inquirerMenu,
    pausa
}