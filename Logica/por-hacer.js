const fs = require('fs');




let listadoPorHacer=[];

const guardarDB= ()=>{
    let data=JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`,data,(err)=>{
        if(err) throw err;
    })
}

const cargardb=()=>{
    try{
        listadoPorHacer = require('../db/data.json')
        console.log(listadoPorHacer);
    } catch(error){
        listadoPorHacer=[];
    }
    
    
}

const crear = (descripcion)=>{
    cargardb();
    let porhacer={
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer;
}

const getlistado = () => {
    cargardb()      
    return  listadoPorHacer;

}




const actualizar = (descripcion,completado = true) =>{
    cargardb();
    
    let index = listadoPorHacer.findIndex(tarea =>{
        return tarea.descripcion === descripcion;
    })
    if (index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
    
}

const borrar = (descripcion) =>{
    cargardb();
 let nuevolistado = listadoPorHacer.filter(tarea =>{
     return tarea.descripcion !== descripcion
 });
 if(listadoPorHacer.length === nuevolistado.length){
     return false;
 }else {
    listadoPorHacer = nuevolistado; 
    guardarDB();
    return true;
 }
}


module.exports={
    crear,
    getlistado,
    actualizar,
    borrar
}