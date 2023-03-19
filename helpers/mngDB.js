const fs = require('fs')
const archivo = `./db/Tareas.JSON`;
const guardarDB = (tareas)=>{
    fs.writeFileSync(archivo, JSON.stringify(tareas));
}
const leerArchivo= ()=>{
    if(!fs.existsSync(archivo)){
        return null;
    }
    const info = JSON.parse(fs.readFileSync(archivo,{encoding:'utf-8'}));
    return info;
}

module.exports={
    guardarDB,
    leerArchivo
}
