function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.what = this.health;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, first) {
  let firstAttacker, secondAttacker;
  fighter1.name === first
    ? ((firstAttacker = fighter1), (secondAttacker = fighter2))
    : ((firstAttacker = fighter2), (secondAttacker = fighter1));

  let stat = true;
  let winner;
  while (stat) {
    if ((secondAttacker.health -= firstAttacker.damagePerAttack) <= 0) {
      winner = firstAttacker.name;
      stat = false;
    }
    if ((firstAttacker.health -= secondAttacker.damagePerAttack) <= 0) {
      winner = secondAttacker.name;
      stat = false;
    }
  }
  console.log("winner : " + winner);
  return winner;
}

// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew");
// declareWinner(
//   new Fighter("Mark", 552, 22),
//   new Fighter("Rocky", 333, 49),
//   "Mark"
// );
declareWinner(
  new Fighter("Harald", 20, 5),
  new Fighter("Harry", 5, 4),
  "Harry"
);
declareWinner(
  new Fighter("Harald", 20, 5),
  new Fighter("Harry", 5, 4),
  "Harald"
);
declareWinner(
  new Fighter("Jerry", 30, 3),
  new Fighter("Harald", 20, 5),
  "Jerry"
);
declareWinner(
  new Fighter("Jerry", 30, 3),
  new Fighter("Harald", 20, 5),
  "Harald"
);
