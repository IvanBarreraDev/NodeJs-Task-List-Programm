//onst {MostrarMenu,Pausa} = require('./helpers/mensajes');

const {inquirerMenu,pausa,leerInput,ListarTareas} = require('./helpers/inquirer')
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
                const task = await ListarTareas(tareas.listadoArr)         
            break;
            case 3:

            break;
            case 4:

            break;
            case 5:

            break;
            case 6:

            break;
            case 7: 

            break;
        }
        //
        await pausa();
    }while(opt !== 0 );
}
main();