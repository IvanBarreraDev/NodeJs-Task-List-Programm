//onst {MostrarMenu,Pausa} = require('./helpers/mensajes');

const {inquirerMenu,pausa,leerInput,TareasListadosIncompletas,TareasListado } = require('./helpers/inquirer')
const {guardarDB,leerArchivo} = require('./helpers/mngDB')
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

console.clear();

const main = async()=>{
    let opt = '';
    const tareas = new Tareas()
    //Cargo los datos de la base de datos al programa
    const info=leerArchivo();
    tareas.cargarTarea(info);

    do{
        //opt= await MostrarMenu();
        opt= await inquirerMenu();
        switch(opt){
            case 1:
                //Crear Tarea
                const descripcion = await leerInput('Descripción:')
                tareas.creaTarea(descripcion);
                guardarDB(tareas.listadoArr);
            break;
            case 2:
                //Listar Tarea
                tareas.listadoCompleto();
            break;
            case 3:
                //Listar Tareas Completadas
                tareas.tareasCompletas();

            break;
            case 4:
                //Listar Tareas Incompletas
                tareas.tareasIncompletas();
            break;
            case 5:
                //Completar Tarea
                const option5 =await TareasListadosIncompletas(tareas.listadoArr);
                tareas.completarTarea(option5);
                guardarDB(tareas.listadoArr);
            break;
            case 6:
                //Elminiar Tarea
                const option6 =await TareasListado(tareas.listadoArr);
                tareas.eliminarTarea(option6);
                guardarDB(tareas.listadoArr);
            break;
            case 7: 
                //Salir

            break;
        }
        //
        await pausa();
    }while(opt !== 0 );
}
main();