class Character {
  constructor(name, strength, spellPower, health, spellCooldown, defenseCooldown) {
      this.name = name,
      this.strength = strength,
      this.spellPower = spellPower,
      this.spellCooldown = spellCooldown,
      this.health = health,
      this.defenseCooldown = defenseCooldown,
      this.defenseUsed = false
  }

  receiveDamage = (enemy, damage) => {

      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage from ${enemy.name}. Now he has a health of ${this.health}`;
      } else {
        return `${this.name} has died in act of combat.`;
      }
  };

  physicalAttack = (enemy) => {
      return enemy.receiveDamage(this, Math.floor(Math.random() * this.strength));
  }

  spellAttack = (enemy) => {
      return enemy.receiveDamage(this, Math.floor(Math.random() * this.strength)+1);
  }
}

class Warrior extends Character {

  spell = () => {
      console.log('Toss Axe');
  }

  receiveDamage = (enemy, damage) => {
      if (this.defenseUsed === true){
          this.health -= damage/2;
          this.defenseUsed = false;
      } else {
          this.health -= damage;
      }
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage from ${enemy.name}. Now he has a health of ${this.health}`;
      } else {
        return `${this.name} has died in act of combat.`;
      }
  };

  defense = () => {
      this.defenseUsed = true;
  }
}

class Mage extends Character {

  spell = () => {
      console.log('Magic Burst')
  }

  defense = () => {
      this.health += 15;
      return `'Mage has used Mend Wounds. Her health is now ${this.health}`
 }
}

class Rogue extends Character {

  spell = () => {
       console.log('Shadow Step')
   }

   receiveDamage = (enemy, damage) => {
      if (this.defenseUsed === true){
          damage = 0;
          this.health -= damage;
          this.defenseUsed = false;
      } else {
          this.health -= damage;
      }
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage from ${enemy.name}. He now has a health of ${this.health}`;
      } else {
        return `${this.name} has died in act of combat.`;
      }
  };


   defense = () => {
      this.defenseUsed = true;
      return `Rogue has used Elude. He dodges the next attack`
  }
}

class FinalBoss extends Character {
  spell = () => {
      console.log('Siphon Soul')
  }

  receiveDamage = (enemy, damage) => {
      if (this.defenseUsed === true){
          console.log(damage);
          damage = damage/2;
          this.health -= damage;
          this.defenseUsed = false;
      } else {
          this.health -= damage;
      }
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage from ${enemy.name}. He now has a health of ${this.health}`;
      } else {
        return `${this.name} has died in act of combat.`;
      }
  };

  defense = () => {
      this.defenseUsed = true;
      return `Final Boss has used Demoralize. He will take half damage in the next round`
  }
}

class Grunt extends Character {
  spell = () => {
      console.log('Scream')
  }

  defense = () => {
      this.health += 10;
      return `'Grunt has used heal. His health is now ${this.health}`
  }
}

class Dragon extends Character {
  spell = () => {
      console.log('Breathe Fire')
  }
  
  receiveDamage = (enemy, damage) => {
      if (this.defenseUsed === true){
          enemy.health -= damage;
          this.defenseUsed = false;
      } else {
          this.health -= damage;
      }
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage from ${enemy.name}. Now he has a health of ${this.health}`;
      } else {
        return `${this.name} has died in act of combat.`;
      }
  };

  defense = () => {
      this.defenseUsed = true;
      return `Dragon has used Mirror Image. Enemy will take their own damage`
  }
}

class IceWoman extends Character {
  spell = () => {
      console.log('Ice Bolt')
  }

  receiveDamage = (enemy, damage) => {
      if (this.defenseUsed === true){
          damage = 0;
          this.health -= damage;
          this.defenseUsed = false;
      } else {
          this.health -= damage;
      }
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage from ${enemy.name}. He now has a health of ${this.health}`;
      } else {
        return `${this.name} has died in act of combat.`;
      }
  };

  defense = () => {
    this.defenseUsed = true;
    return `Ice Woman has used Freeze. She is stops incoming damage in the next round`
  }
} 

let warrior = new Warrior('Warrior', 12, 6, 100, 2, 2);


let mage = new Mage('Mage', 6, 12, 80, 0, 2);


let rogue = new Rogue('Rogue', 9, 9, 90, 3, 2);


let finalBoss = new FinalBoss('Final Boss', 25, 14, 60, 3, 2);


let grunt = new Grunt('Grunt', 12, 5, 30, 1, 3);


let dragon = new Dragon('Dragon', 9, 10, 30, 2, 2);


let iceWoman = new IceWoman('Ice Woman', 5, 12, 25, 1 ,2);
