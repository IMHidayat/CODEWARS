function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.what = this.health;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  firstAttacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  secondAttacker = fighter1.name !== firstAttacker ? fighter2 : fighter1;

  console.log(secondAttacker.health + " - " + firstAttacker.damagePerAttack);
  let stat = true;
  let winner;
  while (stat) {
    if ((secondAttacker.health -= firstAttacker.damagePerAttack) <= 0) {
      winner = firstAttacker.name;
      stat = false;
    }
    if ((firstAttacker.health -= secondAttacker.damagePerAttack) <= 0) {
      winner = firstAttacker.name;
      stat = false;
    }
  }
  return winner;
}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew");
