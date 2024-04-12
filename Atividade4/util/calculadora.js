function somar(a, b){
    let result1 = a + b;
    return result1;
}
function subtrair(a, b){
    let result1 = a - b;
    return result1;
}
function multiplicar(a, b){
    let result1 = a * b;
    return result1;
}
function dividir(a, b){
    if (b !== 0) {
        let result1 = a / b;
        return result1;
    } else {
        return "Erro: divisão por zero!";
    }
}

module.exports = {
    somar,
    subtrair,
    dividir, 
    multiplicar
}