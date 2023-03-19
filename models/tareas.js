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
    
}
module.exports=Tareas