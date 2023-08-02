const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorCompra = require('../controladores/controladorCompra');
const rutas = Router();
rutas.get('/', controladorCompra.Inicio);

module.exports= rutas;