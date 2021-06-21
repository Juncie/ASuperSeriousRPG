const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')


// CLASSES FOR  CHARACTERS

class Character {
    constructor(name, strength, spellPower, health, spellCooldown, defenseCooldown) {
        this.name = name,
        this.strength = strength,
        this.spellPower = spellPower,
        this.spellCooldown = spellCooldown,
        this.health = health,
        this.defenseCooldown = defenseCooldown
    }

    receiveDamage = (enemy, damage) => {

        this.health -= damage;
        if (this.health > 0) {
          return `${this.name} has received ${damage} points of damage from ${enemy}. Now he has a health of ${this.health}`;
        } else {
          return `${this.name} has died in act of combat.`;
        }
    };

    physicalAttack = () => {
        return Math.floor(Math.random() * this.strength);
    }

    spellAttack = () => {
        return Math.floor(Math.random() * this.strength)+1;
    }
}

class Warrior extends Character {

    spell = () => {
        console.log('Toss Axe');
    }
}

class FinalBoss extends Character {
    spell = () => {
        console.log('Siphon Soul')
    }
}

class Grunt extends Character {
    spell = () => {
        console.log('Scream')
    }
 }

class Dragon extends Character {
    spell = () => {
        console.log('Breathe Fire')
    }
}

class IceWoman extends Character {
    spell = () => {
        console.log('Ice Bolt')
    }
} 

let warrior = new Warrior('Warrior', 12, 6, 100, 2, 2);


let mage = new Mage('Mage', 6, 12, 80, 0, 2);


let rogue = new Rogue('Rogue', 9, 9, 90, 3, 2);


let finalBoss = new FinalBoss('Final Boss', 25, 14, 60, 3, 2);


let grunt = new Grunt('Grunt', 12, 5, 30, 1, 3);


let dragon = new Dragon('Dragon', 9, 10, 30, 2, 2);


let iceWoman = new IceWoman('Ice Woman', 5, 12, 25, 1 ,2);


// class Mage extends Character {

//     spell = () => {
//         console.log('Magic Burst')
//     }

//     defense = () => {

//     }
// }

// class Rogue extends Character {

//     spell = () => {
//         console.log('Shadow Step')
//     }

//     defense = () => {

//     }
// }

function animation() {
    

}