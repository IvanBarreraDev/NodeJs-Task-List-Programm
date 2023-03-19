//onst {MostrarMenu,Pausa} = require('./helpers/mensajes');
const {inquirerMenu,pausa} = require('./helpers/inquirer')
console.clear();
const main = async()=>{
    let opt = '';
    do{
        //opt= await MostrarMenu();
        opt= await inquirerMenu();
        await pausa();
    }while(opt !== 0 );
}
main();