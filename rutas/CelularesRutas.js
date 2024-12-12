const express = require('express');
const router = express.Router();

const obtenerCelulares = require('../controladores/GetCelulares_Controlador');
const AñadirCelulares = require('../controladores/PostCelulares_Controlador');
const actualizacion = require('../controladores/UpdCelulares_Controlador');
const Borrar = require('../controladores/DlteCelulares_Controlador');


router.get('/api/productos', obtenerCelulares);
router.post('/api/productos', AñadirCelulares);
router.put('/api/productos/:marca/:modelo', actualizacion);
router.delete('/api/productos/:marca/:modelo', Borrar);

module.exports = router;