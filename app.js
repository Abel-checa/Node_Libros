const express = require('express')
const app = express()
const morgan= require('morgan')
const path = require('path')
const rutas = require('./rutas/rutas.js')

// Settings
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))


// Middlewares
app.use('/public', express.static(path.join(__dirname,'public')))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(rutas)
app.listen(3000, ()=> {
    console.log('El servidor esta sirviendo en el puerto 3000');
})