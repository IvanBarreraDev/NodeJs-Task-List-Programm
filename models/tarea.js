const { v4: uuidv4 } = require('uuid');
class Tarea {
    id='';
    description='';
    completado= null;
    constructor(description){
        this.description = description;
        this.id=uuidv4();
        this.completado=null;
    }
    
}
module.exports=Tarea;