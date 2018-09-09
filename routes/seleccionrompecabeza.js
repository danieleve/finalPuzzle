const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');


router.get('/', function(req, res){
             
    knex('images')
       .then( images => {
        res.render('seleccionrompecabeza', {images: images});
    });
    
  });
  

module.exports = router;