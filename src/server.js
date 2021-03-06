//importar dependencias
const express = require('express');
const path = require('path')
const pages = require('./pages.js');

//iniciando a biblioteca express
const server = express()
server
//utilizar os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//criar rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


//ligando server
server.listen(5500)