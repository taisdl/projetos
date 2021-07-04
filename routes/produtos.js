const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o Get dentro da rota produtos'
    })
   
});

router.post('/', (req, res, next) => {
   res.status(201).send({
       mensagem:' Usando o POST dentro da rota de produtos'
   })
});


router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    
    if(id == 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o ID exc',
            id: id
        });
    }else{
        res.status(200).send({
            mensagem: 'Você passou um ID errado',
            id: id
        });
    }

    
   
});

router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota produtos'
    })
   
});

router.delete('/', (req, res, next) => {
   res.status(201).send({
       mensagem:' Usando o DELETE dentro da rota de produtos'
   })
});


module.exports = router;
