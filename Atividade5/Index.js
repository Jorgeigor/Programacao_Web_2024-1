const express = require('express');
const app = express();
const estoque = require('./src/Stock');

app.get('/adicionar/:id/:nome/:qtd', function(req, res){
 let id = req.params.id;
 let nome = req.params.nome;
 let qtd = req.params.qtd;
 let p = estoque.CriarProduto(id, nome, qtd);
 estoque.AdicionarProduto(p);
 res.send(p);

});
app.get('/listar', function(req, res){
    res.send (estoque.listarProdutos());
});
app.get('/remover/:id', function(req, res){
    let id = req.params.id;
    estoque.RemoverProduto(id);
    res.send(id);
});
app.get('/editar/:id/:qtd', function(req, res){
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.editarProduto(id, qtd);

});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta' + PORT); 
});