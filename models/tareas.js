const Tarea = require("./tarea");

class Tareas {
    _listado={};
    constructor(_listado) {
        this._listado={};
    };
    get listadoArr(){
        const listado = []
        Object.keys(this._listado).forEach((key)=>{
            const tarea=this._listado[key]
            listado.push(tarea);
        })
        return listado;
    }
    creaTarea(des=''){
        const tarea = new Tarea(des);
        this._listado[tarea.id]= tarea;
    }
    cargarTarea(arreglo = []){
        arreglo.forEach((tarea)=>{
            this._listado[tarea.id]=tarea;
        })
    }
    listadoCompleto(){
        const arreglo=this.listadoArr
        arreglo.forEach((tarea,i) => {
        const {description,completado}= tarea
        const estado = (completado == null) ? 'Pendiete'.red : 'Completado'.green;
        console.log(`${i+1} - ${description} :: ${estado}`);
    });
    }
    tareasIncompletasyCompletas(completada = true){
        const arreglo=this.listadoArr
        arreglo.forEach((tarea,i) => {
        const {description,completado}= tarea
        if(completada){
            if(completado != null){
                console.log(`${i+1} - ${description} :: ${completado} :: ${'Completada'.green }`);
            }
        }else{
            if(completado == null){
                console.log(`${i+1} - ${description} :: ${'Pendiete'.red }`);
            }
        }
        
        });
    }
    completarTarea(ids=[]){
        //Obtengo Fecha
        const date = new Date();
        const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
        //Completar las tareas que estaban pedientes y no cambiar la fechas de las que ya se encontraban completadas
        ids.forEach((id)=>{
            const estadoTarea=this._listado[id].completado;
           this._listado[id].completado= (estadoTarea !== null) ? estadoTarea : `${day}/${month}/${year}`;
        })
        //Pongo pendiente a todas las tareas que no estan incluidas en el arreglo 'ids'
        this.listadoArr.forEach((tarea)=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completado=null;
            }
        })
    }
    eliminarTarea(id){
        delete this._listado[id];
    }
    
}
module.exports=Tareas