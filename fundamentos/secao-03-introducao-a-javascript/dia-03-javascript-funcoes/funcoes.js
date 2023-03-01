function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}

console.log(cumprimentaCliente('Isaac'))
console.log('------#------');

let saldo = 300;
function adicionaValor(valor) {
    return 'Seu saldo é: ' + (saldo + valor);
}

console.log(adicionaValor(30));
console.log('------#------');

function subtraiValor(valor) {
    return 'Seu saldo é: ' + (saldo - valor);
}

console.log(subtraiValor(30));
console.log('------#------');

function multiplcaValor(valor) {
    return 'Seu saldo é: ' + (saldo * valor);
}

console.log(multiplcaValor(30));
console.log('------#------');

function divideValor(valor) {
    return 'Seu saldo é: '+ (saldo / valor);
}

console.log(divideValor(30));
console.log('------#------');

