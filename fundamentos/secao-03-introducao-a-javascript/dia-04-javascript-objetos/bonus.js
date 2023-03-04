let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function adicionaTurno(objeto, chave, valor) {
    objeto[chave] = valor;
}
adicionaTurno(lesson2, 'turno', 'noite')
console.log(lesson2);

function listaChaves(obj){
    return Object.keys(obj)
}
console.log(listaChaves(lesson3));

function tamanhoObj(obj){
    return Object.keys(obj).length;
}
console.log(tamanhoObj(lesson3));

function showValuesObj(obj){
    return Object.values(obj);
}
console.log(showValuesObj(lesson1));

let allLessons = Object.assign({}, {
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3
});
// O método "Object.assign()" recebe dois parâmetros: um objeto e o que se quer atribuir à ele. Se no primeiro parâmetro for passado um objeto vazio, ele criará um objeto novo com as caraterísticas do segundo parâmetro.

console.log(allLessons);