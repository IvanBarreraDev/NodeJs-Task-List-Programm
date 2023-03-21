//const inquirer = import('inquirer');
const inquirer = require('inquirer');
const color = require('colors');
const Tareas = require('../models/tareas');
const MenuPrincipal = [
    {
        type:'list',
        name:'opcion',
        message:'Selecciona una opción:',
        choices:[
            {
                value:1,
                name:`1- Crear tarea`},
            {
                value:2,
                name:`2- Listar tarea`},

            {
                value:3,
                name:`3- Listar tareas completadas`},
            {
                value:4,
                name:`4- Listar tareas incompletas`},
            {
                value:5,
                name:`5- Completar tarea`},
            {
                value:6,
                name:`6- Eliminar tarea`},
            {
                value:0,
                name:`0- Salir`}
        ]
    }
]

const inquirerMenu = async()=>{
    console.clear();
    console.log(`====================================================`.green)
    console.log('==============='.green + ' Aplicación de Tareas '+ '==============='.green)
    console.log(`====================================================\n`.green)
    const {opcion}= await inquirer.prompt(MenuPrincipal);
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
const leerInput = async(message)=>{
    const question =[{
        type:'input',
        name:'desc',
        message,
        validate(value){  
            if(value.length === 0){
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }]
    const {desc} = await inquirer.prompt(question);
    return desc;
}
const TareasListadosIncompletas =async(arrTareas)=>{
    let choices = [];
    arrTareas.forEach((tarea,i) => {
        const {id,description,completado}= tarea;
        if(completado == null){
            const objt = {
                value:id,
                name:`${i+1} - ${description} :: ${'Pendiete'.red }`
            }
            choices.push(objt); 
        }
    });
    const question =[{
        name:'Tareas',
        message:'Tareas:',
        type:'list',
        choices:choices
    }]
    const {Tareas} = await inquirer.prompt(question);
    return Tareas;

}
const TareasListado =async(arrTareas)=>{
    let choices = [];
    arrTareas.forEach((tarea,i) => {
        const {id,description,completado}= tarea;
        const objt = {
            value:id,
            name:`${i+1} - ${description} :: ${(completado == null) ? 'Pendiente'.red: 'Completado'.green }`
        }
        choices.push(objt); 
    });
    const question =[{
        name:'Tareas',
        message:'Tareas:',
        type:'list',
        choices:choices
    }]
    const {Tareas} = await inquirer.prompt(question);
    return Tareas;

}
module.exports= {
    inquirerMenu,
    pausa,
    leerInput,
    TareasListadosIncompletas,
    TareasListado 
}