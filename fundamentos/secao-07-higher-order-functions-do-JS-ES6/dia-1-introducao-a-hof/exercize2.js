const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const minDamage = 15;
  const maxDamage = Math.floor(Math.random() * dragon.strength);

  const damage = maxDamage > minDamage ? maxDamage : minDamage;

  return damage;
}

console.log("O dando do dragao é: " + dragonDamage(dragon));

const warriorDamage = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = Math.floor(Math.random() * (minDamage * warrior.weaponDmg));
  return maxDamage;
}
console.log("O dando do guerreiro é: " + warriorDamage(warrior));

const magoObj = (mage) => {
  const manaResult = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;

  const stats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  }
  if (manaResult > 15) {
    const manaDmg = minDamage < maxDamage ? maxDamage : minDamage;
    stats.manaSpent = 15;
    stats.damageDealt = manaDmg;
    return stats
  }
  return stats
}
console.log(magoObj(mage));

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorDgm = warriorDamage(warrior);
    dragon.healthPoints -= warriorDgm;
    warrior.damage = warriorDgm;
  },
  mageTurn: (magoObj) => {
    const magoAttack = magoObj(mage);
    const mageDmg = magoAttack.damageDealt;
    mage.mana -= magoAttack.manaSpent;
    dragon.healthPoints -= magoAttack;
    mage.damage = mageDmg;
  },
  dragonTurn: (dragonDamage) => {
    const dragao = dragonDamage(dragon);
    mage.healthPoints -= dragao;
    warrior.healthPoints -= dragao;
    dragao.damage = dragao;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(magoObj);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());