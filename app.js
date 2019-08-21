'use-strict'

var express = require('express');
var bodyParser = require('body-parser');
const RUTA_BASE = '/innatoAPI'; //Ruta base para nuestros servicios.

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Servicio de tipo GET
router.get('/',(req,res)=>{
    res.status(200).send("Servicios inicializados. 👌");
});

//Servicio de tipo POST
router.post('/postService',(req,res)=>{
    let {nombre,correo,telefono} = req.body;

    if(!nombre || nombre.trim() === ""){
        res.status(400).send({error:true,msg:"Campo Nombre requerido.",type:"BAD REQUEST"});
    }else if(!correo || correo.trim() === ""){
        res.status(400).send({error:true,msg:"Campo Correo requerido.",type:"BAD REQUEST"});
    }else if(!telefono || telefono.trim() === ""){
        res.status(400).send({error:true,msg:"Campo Teléfono requerido.",type:"BAD REQUEST"});
    }else{
        //Cumplio todas las validaciones
        res.status(200).send(`Estos son tus datos ${nombre} - ${correo} - ${telefono}`);
    }
});

app.use(RUTA_BASE,router);

module.exports = app;




