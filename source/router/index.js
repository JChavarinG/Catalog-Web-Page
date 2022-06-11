const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Trabajando servidor')
})

router.get('/indexES', (req, res) => {
  res.render('index.html', { titulo: 'Carpintería Chavarín' })
})

router.get('/indexEN', (req, res) => {
  res.render('english/index.html', { titulo: 'Nuestros Trabajos' })
})

/* router.get('/materiales', (req, res) => {
  res.render('materiales.html', { titulo: 'Materiales' })
})

router.get('/acercade', (req, res) => {
  res.render('acercade.html', { titulo: 'Acerca de Nosotros' })
})

router.get('/contacto', (req, res) => {
  res.render('contacto.html', { titulo: 'Contacto' })
}) */

router.get('*', (req, res) => {
  res.send('No existe la pagina/No es una ruta valida')
})

module.exports = router;