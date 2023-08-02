const {Router} = require('express');
const controladorEntre = require('../controladores/controladorEntre');
const {body} = require('express-validator');
const rutas = Router();

rutas.get('',controladorEntre.Login);
rutas.post('',controladorEntre.IniLogin);
rutas.get('/logout',controladorEntre.Logout);
module.exports=rutas;