const http = require('http')
const express = require('express')
const puerto = 3001;
const path = require('path')
const misRutas = require('./router/index')

const app = express()

//Configuraciones
//Motor de vista
app.set('views engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)


//Recursos publicos
app.use(express.static(path.join(__dirname, 'public')))


//Router

app.use(misRutas)

app.listen(puerto, () => {
  console.log('Iniciando el puerto ' + puerto);
})