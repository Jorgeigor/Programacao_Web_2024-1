const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser'); 
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.render('index.html');
});

app.post('/dados', function(req, res){
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const telefone = req.body.telefone;
    const data = req.body.data;
    
    res.render('dados.html', { nome: nome, endereco: endereco, telefone: telefone, data: data });
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT)
});
