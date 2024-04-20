Produtos = [];
function CriarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p
}
function AdicionarProduto(p){
    Produtos.push(p);
}
function listarProdutos(){
    return Produtos;
}
function RemoverProduto(id){
    Produtos = Produtos.filter((p)=>{
        return p.id !=id;

    });
}
function editarProduto(id, qtd){
    Produtos.forEach((p)=>{
        if (p.id==id){
            p.qtd = qtd;
        }
    });



}
module.exports = {
   CriarProduto, 
   AdicionarProduto,    
   listarProdutos,
   RemoverProduto,
   editarProduto
}
