const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req, res) {
    response.success( req, res, 'Lista de estudiantes de la UPS.', 200 )
})
router.post('/', function(req, res) {
    if (req.query.error == 'ok') {
        response.error( req, res, 'Error al ingresar Estudiante.', 500 )
    } else {
        response.success( req, res, 'Ingreso de Estudiante exitoso.', 201 )
    }
})

module.exports = router
