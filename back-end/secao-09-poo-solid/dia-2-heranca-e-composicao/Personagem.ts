interface Personagem {
  nome: string;
  nivel: number;
  classe: string;
  atacar(): void;
  defender(): void;
}

class Guerreiro implements Personagem {
  nome = 'Kratos';
  nivel = 100;
  classe = 'Guerreiro da Justiça';

  atacar() {
    console.log('Kratos usou a Lâmina do Caos! Inimigo derrotado!');
  }
  
  defender() {
    console.log('Kratos levantou o escudo e bloqueou o ataque!');
  }
}

const meuGuerreiro: Personagem = new Guerreiro();
meuGuerreiro.atacar(); // "Kratos usou a Lâmina do Caos! Inimigo derrotado!"
meuGuerreiro.defender(); // "Kratos levantou o escudo e bloqueou o ataque!"