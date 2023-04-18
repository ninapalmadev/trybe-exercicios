let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda,', info.personagem);
console.log('____________');

info['recorrente'] = 'Sim';
console.log(info);
console.log('____________');

for (let key in info) {
    console.log(key);
}
console.log('____________');

for (let value in info) {
    console.log(info[value]);
}
console.log('____________');

let info2 = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}
for (let keys in info) {
    if (keys === 'recorrente' &&
        info[keys] === 'Sim' &&
        info2[keys] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[keys], 'e', info2[keys]);
    }
}


