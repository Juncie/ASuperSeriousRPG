//const canvas = document.querySelector('canvas')
//canvas.width = window.innerWidth
//canvas.height = window.innerHeight
//const ctx = canvas.getContext('2d')
// CLASSES FOR  CHARACTERS
class Character {
    constructor(name, strength, spellPower, health, spellCooldown, defenseCooldown) {
        this.name = name,
        this.strength = strength,
        this.spellPower = spellPower,
        this.spellCooldown = spellCooldown,
        this.health = health,
        this.defenseCooldown = defenseCooldown,
        this.defenseUsed = false,
        this.defenseCooldownCounter = 0,
        this.spellCooldownCounter = 0
    }
    receiveDamage = (enemy, damage) => {
        this.health -= damage;
        if (this.health > 0) {
          return `${this.name} has received ${damage} point(s) of damage from ${enemy.name}. They now have a health of ${this.health}`;
        } else {
          return `${this.name} has died in act of combat.`;
        }
    };
    physicalAttack = (enemy) => {
        return enemy.receiveDamage(this, Math.floor(Math.random() * this.strength));
    }
    spellAttack = (enemy, round) => {
        if (this.spellCooldownCounter <= round || this.spellCooldownCounter == 0){
            this.spellCooldownCounter = round + this.spellCooldown;
            return enemy.receiveDamage(this, Math.floor(Math.random() * this.strength)+1);
        }
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
          return `${this.name} has received ${damage} point(s) of damage from ${enemy.name}. Now he has a health of ${this.health}`;
        } else {
          return `${this.name} has died in act of combat.`;
        }
    };
    defense = (round) => {
        if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 0){
            this.defenseCooldownCounter = round + this.defenseCooldown;
            this.defenseUsed = true;
            return `Warrior raised shield, he will receive half damage on the next attack`
        }
    }
}
/*class Mage extends Character {    
    defense = (round) => {
        if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 0){
            this.defenseCooldownCounter = round + this.defenseCooldown;
            this.health += 15;
            return `Mage has used Mend Wounds. Her health is now ${this.health}`
        }
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
          return `${this.name} has received ${damage} point(s) of damage from ${enemy.name}. He now has a health of ${this.health}`;
        } else {
          return `${this.name} has died in act of combat.`;
        }
    };
     defense = (round) => {
        if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 0){
            this.defenseCooldownCounter = round + this.defenseCooldown;
            this.defenseUsed = true;
            return `Rogue has used Elude. He dodges the next attack`
        }
    }
}*/
class FinalBoss extends Character {
    spell = () => {
        console.log('Siphon Soul')
    }
    receiveDamage = (enemy, damage) => {
        if (this.defenseUsed === true){
            damage = damage/2;
            this.health -= damage;
            this.defenseUsed = false;
        } else {
            this.health -= damage;
        }
        if (this.health > 0) {
          return `${this.name} has received ${damage} point(s) of damage from ${enemy.name}. He now has a health of ${this.health}`;
        } else {
          return `${this.name} has died in act of combat.`;
        }
    };
    defense = (round) => {
        if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 0){
            this.defenseCooldownCounter = round + this.defenseCooldown;
            this.defenseUsed = true;
            return `Final Boss has used Demoralize. He will take half damage in the next round`
        }
    }
}
class Grunt extends Character {
    spell = () => {
        console.log('Scream')
    }
    defense = (round) => {
        if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 0){
            this.defenseCooldownCounter = round + this.defenseCooldown;
            this.health += 10;
            return `'Grunt has used heal. His health is now ${this.health}`
        }
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
            return `${enemy.name} has received ${damage} point(s) of damage from their own attack! They now have a health of ${enemy.health}`
        } else {
            this.health -= damage;
        }
        if (this.health > 0) {
          return `${this.name} has received ${damage} point(s) of damage from ${enemy.name}. Now he has a health of ${this.health}`;
        } else {
          return `${this.name} has died in act of combat.`;
        }
    };
    defense = (round) => {
        if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 0){
            this.defenseCooldownCounter = round + this.defenseCooldown;
            this.defenseUsed = true;
            return `Dragon has used Mirror Image. Enemy will take their own damage`
        }
    }
}
/*class IceWoman extends Character {
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
          return `${this.name} has received ${damage} point(s) of damage from ${enemy.name}. He now has a health of ${this.health}`;
        } else {
          return `${this.name} has died in act of combat.`;
        }
    };
    defense = (round) => {
        if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 0){
            this.defenseCooldownCounter = round + this.defenseCooldown;
            this.defenseUsed = true;
            return `Ice Woman has used Freeze. She haults incoming damage in the next round`
        }
    }
}*/ 
let warrior = new Warrior('Warrior', 15, 6, 130, 2, 2);
//let mage = new Mage('Mage', 6, 12, 80, 0, 2);
//let rogue = new Rogue('Rogue', 9, 9, 90, 3, 2);
let finalBoss = new FinalBoss('Final Boss', 25, 14, 60, 3, 2);
let grunt = new Grunt('Grunt', 12, 5, 30, 1, 3);
let dragon = new Dragon('Dragon', 9, 10, 30, 2, 2);
//let iceWoman = new IceWoman('Ice Woman', 5, 12, 25, 1 ,2);
function fight (hero,enemy) {
  let round = 0;
//   while (hero.health > 0 && enemy.health > 0) {
    document.addEventListener('keyup',doFight());
    function doFight(event){
        console.log(round);
        let playerChoice = event.key;
        if (playerChoice == 'd' && hero.defenseCooldownCounter > round){
            console.log('Cannot use defense because there is a cooldown');
            return;
        } else if (playerChoice == 's' && hero.spellCooldownCounter > round){
            console.log('Cannot use spell because there is a cooldown');
            return;
        } else if (playerChoice !== 's' && playerChoice !== 'd' && playerChoice !== 'a'){
            console.log('Invalid input, please only use a, s, d');
            return;
        }
        switch(playerChoice){
        case 'a':
            console.log(hero.physicalAttack(enemy));
            break;
        case 's':
            console.log(hero.spellAttack(enemy,round));
            break;
        case 'd':
            console.log(hero.defense(round));
            break;
        }
        if (enemy.health <= 0){
            document.removeEventListener('keyup',doFight());
            return;
        }
        let aiChoice = '';
        while(true){
            aiChoice = Math.floor(Math.random()*3);
            if (aiChoice == 2 && enemy.defenseCooldownCounter > round){
                continue;
            } else if (aiChoice == 1 && enemy.spellCooldownCounter > round){
                continue;
            } else {break;}
        }
        switch(aiChoice){
            case 0:
                console.log(enemy.physicalAttack(hero));
                break;
            case 1:
                let response = enemy.spellAttack(hero,round);
                console.log(response);
                break;
            case 2:
                console.log(enemy.defense(round));
                break;
        }
        if (hero.health>0 && enemy.health >0){
            round++;
        } else {
            document.removeEventListener('keyup',doFight);
            return;
        }
  };
}
function animation() {
}