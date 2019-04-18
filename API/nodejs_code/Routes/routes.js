var express = require('express');

//DEFINIENDO EL ENRUTADOR
var router = express.Router();

/*RUTA DE INICIO PARA CHEQUEAR QUE TODO ESTA BIEN*/
router.route('/').get(function (req, res) {
    res.json({
        status:'API Up and Running!',
        author:'Ricardo Cutz Hernandez'
    });
});

/*SI SE CONSULTA UNA API QUE NO EXISTE EN LA API*/
router.route('*').get(function (req, res){
    res.json({
        status:'API Route not found....'
    });
});

module.exports = router;