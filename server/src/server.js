const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('../public'))

// Configurando as rotas do servidor
app.get('/cardapio', (req, res) => {
  return res.status(200).json([    
    {
         id:1,
         nome: "TRADICIONAL",
         category: "hamburguer",
         preco: "24,75",
         img:'http://localhost:5555/images/Duplo-3-queijos.jpg',
         descricao: "Hamburguer,mussarela, alface, tomate, cebola roxa, ketchup, mostrada e molho pinus"
     },
     {
         id:2,
         nome:"VEGETARIANO",
         category: "hamburguer",
         preco:"28,75",
         img:'http://localhost:5555/images/hamburguer3.jpg',
         descricao:"Brinjela, abobrinha italiana grelhada, alaface, rucula, tomate, cebola, tomate seco, sour cream, mussarela de bufala e molho pinus"
     },
     {
         id:3,
         nome:"FRANGO ESPECIAL",
         category: "hamburguer",
         preco:"28,75",
         img:'http://localhost:5555/images/hamburguer3.jpg',
         descricao:"Frango, mussarela, geleia de abacaxi, sour cream, rucula e molho pinus"
     },
     {
         id:4,
         nome:"PINUS",
         category: "hamburguer",
         preco:"29,75",
         img:'http://localhost:5555/images/hamburguer3.jpg',
         descricao:"Hamburguer, queijo gorgonzola, cebola caramelizada, rucula e molho pinus"
     },
     {
         id:5,
         nome:"CHEFINHO",
         category: "hamburguer",
         preco:"30,75",
         img:'http://localhost:5555/images/hamburguer3.jpg',
         descricao:"Hamburguer, queijo cheddar, sour cream, bacon e cebola caramelizada"
     },
     {
         id:6,
         nome:"QUEIJO BUFALA",
         category: "hamburguer",
         preco:"30,75",
         img:'http://localhost:5555/images/hamburguer3.jpg',
         descricao:"Hamburguer, queijo bufala, rucula, tomate seco, sour cream e molho pinus"
     },
     {
         id:7,
         nome:"MINI TRIO BURGUER",
         category: "hamburguer",
         preco:"27,75",
         img:'http://localhost:5555/images/hamburguer3.jpg',
         descricao:"Mini Tradicional, Mini Cheddar, Mini Pinus"
     },
     {
         id:8,
         nome:"COMBO KIDS",
         category: "Hamburguer",
         preco:"24,00",
         img:'http://localhost:5555/images/hamburguer3.jpg',
         descricao:"Hamburguer e queijo, acomapnha fritas palito e 1 suco"
     },
     {
         id:9,
         nome: "PASTELZINHO DE NUTELLA",
         category: "Sobremesa",
         preco:"25,00",
         img:'',
         descricao:"10 unidades"
     },
     {
        id:10,
        nome: "BROWNIE COM SORVETE",
        category: 'sobremesa',
        preco: '28,00',
        descricao:'3 bolas de sorvete, frutas e cobertura de chocolate',     
     },
     {
        id:11,
        nome: "TACA MORANGO COM CHOCOLATE",
        category: 'sobremesa',
        preco: '28,00',
        descricao:'NOVO',     
     }


]);
});
// Iniciando o servidor
const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});