const con = require('./bd.js')

const getAllboks = async ()=>{
   try{
    const resultado= await con.query('select * from productos')
    return resultado
   }catch(e){
    return false
   }
}

const postBook = (libro)=>{
    try{
        con.query(`insert into productos (id,nombre,imagen,autor,descripcion) values (null,'${libro.nombre}','${libro.imagen}','${libro.autor}','${libro.descripcion}')`)
        return true
    }catch(e){
        console.log(e);
        return false
    }
}

const deletebook = (id)=> {
    try{
        con.query(`delete from productos where id= ${id}`)
        return true
    }catch(e){
        console.log(e);
    }
}

const findBook = (nombre) =>{
    try{
        const resultado = con.query(`select * from productos where nombre = '${nombre}'*`)
    }catch(e){
        console.log(e);
    }
}
module.exports = {getAllboks: getAllboks, postBook:postBook, deletebook:deletebook}