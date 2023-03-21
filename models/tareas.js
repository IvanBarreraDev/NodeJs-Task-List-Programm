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
    tareasIncompletas(){
        const arreglo=this.listadoArr
        arreglo.forEach((tarea,i) => {
        const {description,completado}= tarea
        if(completado == null){
            console.log(`${i+1} - ${description} :: ${'Pendiete'.red }`);
        }
        });
    }
    tareasCompletas(){
        const arreglo=this.listadoArr
        arreglo.forEach((tarea,i) => {
        const {description,completado}= tarea
        if(completado != null){
            console.log(`${i+1} - ${description} :: ${completado} :: ${'Completada'.green }`);
        }
        });
    }
    completarTarea(id){
        const date = new Date();
        const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
        //const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        this._listado[id].completado=`${day}/${month}/${year}`;
    }
    eliminarTarea(id){
        delete this._listado[id];
    }
    
}
module.exports=Tareas