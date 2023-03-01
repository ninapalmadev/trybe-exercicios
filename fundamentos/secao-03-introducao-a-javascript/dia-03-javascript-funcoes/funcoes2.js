let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adiciona(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente);
        return 'Cliente adicionado '
    } else {
        return 'Erro. Você deve enviar um parâmetro do tipo string'
    }
}

console.log(adiciona('Ana'));
console.log(adiciona('João'));
console.log(adiciona('Carol'));
console.log(adiciona('Paola'));

function remove(cliente) {
    if (typeof cliente === 'string') {
        let clienteExiste = false;
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteExiste = true;
                return 'Cliente excluido da lista. '
            }
        }
        if(clienteExiste === false){
            return 'Cliente inexistente';
        }

    } else {
        return 'Erro. Você deve enviar um parâmetro do tipo string'
    }
}

console.log(remove('Ada'));
console.log(remove('Fran'));
console.log(clientesTrybeBank);
