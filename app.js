//onst {MostrarMenu,Pausa} = require('./helpers/mensajes');

const {
    inquirerMenu
    ,pausa
    ,leerInput
    ,TareasListadosIncompletas
    ,TareasListadoEliminar
    ,confirmMsg } = require('./helpers/inquirer')

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
            //Crear Tarea
            case 1:
                const descripcion = await leerInput('Descripción:')
                tareas.creaTarea(descripcion);
            break;
            //Listar Tarea
            case 2:
                tareas.listadoCompleto();
            break;
            //Listar Tareas Completadas
            case 3:
                tareas.tareasIncompletasyCompletas(true);

            break;
            //Listar Tareas Incompletas
            case 4:
                tareas.tareasIncompletasyCompletas(false);
            break;
            //Completar Tarea
            case 5:
                const option5 =await TareasListadosIncompletas(tareas.listadoArr);
                tareas.completarTarea(option5);
            break;
            //Elminiar Tarea
            case 6:
                const option6 =await TareasListadoEliminar(tareas.listadoArr,false);
                if(option6 !== '0'){
                    const ok = await confirmMsg('¿Estas Seguro?');
                    if(ok){
                        tareas.eliminarTarea(option6);
                        console.log('Tarea borrada'.yellow);
                    }
                }

            break;
            //Salir
            case 7: 

            break;
        }
        //
        guardarDB(tareas.listadoArr);
        await pausa();
    }while(opt !== 0 );
}
main();