// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(DamageTaken){
    this.health -= DamageTaken;
  }
}

// Viking
  class viking extends Soldier{
    constructor(name, health, strength){
      super(health, strength);
      this.name = name;
    }
    receiveDamage(amount){
      super.receiveDamage(amount);
      if (this.health > 0) {
        return `${this.name} has received ${amount} points of damage`;
      } else { 
        return `${this.name} has died in the act of combat`;
      }
   
    }
    battleCry(){
      return 'Odin Owns You All!';
    }
  }


// Saxon
class Saxon extends Soldier {
  receiveDamage(amount) {
    super.receiveDamage(amount)
    if (this.health > 0){
      return `A Saxon has received ${amount} points of damage`
    } else {
      return ` A Saxon had died in combat`
    }
  }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
