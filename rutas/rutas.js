const express = require('express')
const router = express.Router()
const {getAllboks,postBook, deletebook} = require('../base_datos/funciones.js')

router.get('/', async (req,res)=> {
    const books = await getAllboks()
    if(books[0].length == 0){
        res.render('home',{libros: books[0]})
    }else{
        res.render('home',{libros: books[0]})
    }
})
router.get('/newbook',(req,res) => {
    res.render('newbook')
})

router.post('/newbook', (req,res) => {
    const resultado = postBook(req.body)
    if (resultado){
        res.redirect('http://localhost:3000')
    }
    else{
        console.log("No ha salido bien");
    }
    
})

router.get('/delete/:id',(req,res) => {
    try{
        const result =  deletebook(req.params.id)
        res.redirect('http://localhost:3000')
    }catch(e){
        res.redirect('http://localhost:3000')
    }
    
    
})

router.get('/book/:id', (req,res) =>{
    
})


module.exports = router