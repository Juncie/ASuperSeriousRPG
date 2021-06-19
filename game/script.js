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
}

class Warrior extends Character {

    spell = () => {
        console.log('Toss Axe');
    }
}

class FinalBoss extends Character {
    spell = () => {

    }
}

let warrior = new Warrior('Warrior', 12, 6, 100, 2, 2);


let finalBoss = new FinalBoss('Final Boss', 25, 14, 60, 3, 2);




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