 const descripcion={     
     descripcion:{
         demand:true,
         alias:'d',
         desc:'Descripcion de la tarea por hacer'     }
 }
const completado={
    completado:{
        alias:'c',
        default:true,
        desc:'marca como completado o pendiente de la tarea'
    }
}



const argv = require('yargs')
    .command('crear','Cosas Que Hacer',descripcion)
    .command('actualizar','actualiza una Tarea',{
        descripcion,completado
        })
    .command('borrar','borra una Tarea',descripcion).help().argv;


module.exports = {
    argv
}