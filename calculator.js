// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    if (v2 === 0) {
        return "Erro: divisão por zero";
    }
    return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    if (v1 < 0) {
        return "Erro: número negativo não possui raiz real";
    }
    return Math.sqrt(v1);
}

// Apenas para teste (exemplo)
// Você pode remover essa linha depois ou ajustar
console.log(sum(10, 5));
