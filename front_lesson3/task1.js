function fighter({name, attack, hp}) {
  this.name = name;
  this.attack = attack;
  this.hp = hp;

  this.blocked = false;
  this.wins = 0;
  this.losses = 0;

  this.getName = function() {
    return `Fighter ${this.name}`;
  }
  this.block = function() {
    return !this.block;
  }
  this.getStats = function() {
    return `${this.name} has ${this.hp} hp and ${this.attack} attack`;
  }
  this.getHistory = function() {
    return {
      fighter: `Fighter ${this.name}`,
      stats: {
        wins: this.wins,
        losses: this.losses
      },
      prop: {
        name: this.name,
        attack: this.attack,
        hp: this.hp
      }
    };
  }
  this.fight = function(opponent) {
    if(opponent.hp > 0 && this.hp > 0){
      if(opponent.blocked){
        opponent.blocked = false;
        return false;
      }

      opponent.hp -= this.attack;
      if(opponent.hp <= 0) {
        opponent.hp = 0;
        opponent.losses++;
        this.wins++;
        return true;
      }
      return false;
    } else{
      return false;
    }
  }
}

let fighter1 = new fighter({name: 'John', attack: 100, hp: 100});
let fighter2 = new fighter({name: 'Kayn', attack: 50, hp: 300});
let fighter3 = new fighter({name: 'Bill', attack: 40, hp: 100});

fighter1.fight(fighter2) ? 
  console.log(`fighter 1 dealt damage to fighter 2`) :
  console.log(`fighter 2 blocked incoming damage or still alive`);

fighter1.fight(fighter3) ? 
  console.log(`fighter 1 dealt damage to fighter 3`) :
  console.log(`fighter 3 blocked incoming damage or still alive`);

console.log(fighter1.getHistory());
console.log(fighter2.getHistory());
console.log(fighter3.getHistory());
