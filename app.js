
    const color= require('colors');

    const argv = require('./config/yargs').argv;

    const porHacer=require('./Logica/por-hacer');

    let comando = argv._[0];



switch (comando) {
    case'crear':
      let tarea= porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
   
    case'listar':
        let listado = porHacer.getlistado();    
     for(let tarea of listado){
        console.log('=====por Hacer====='.green);
        console.log(tarea.descripcion);
       console.log('Estado: ',tarea.completado);
       console.log('===================='.green);
       
     } 
    break;
   
    case'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
    console.log(actualizado);
       
    break;

    case'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    console.log('se borro correctamente');
    break;

    default:console.log('Comando no Reconocido');
}

