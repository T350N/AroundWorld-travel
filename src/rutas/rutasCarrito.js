const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorInicio = require('../controladores/controladorCarrito');
const rutas = Router();
rutas.get('/', controladorInicio.Inicio);

module.exports= rutas;