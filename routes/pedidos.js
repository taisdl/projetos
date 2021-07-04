const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    })
   
});

router.post('/', (req, res, next) => {
   res.status(201).send({
       mensagem:' O pedido foi criado'
   })
});


router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
        res.status(200).send({
            mensagem: 'Detalhes do pedido',
            id: id
        });
   
    

    
   
});

router.delete('/', (req, res, next) => {
   res.status(201).send({
       mensagem:'Pedido excluído'
   })
});


module.exports = router;
