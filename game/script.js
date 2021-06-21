
// CLASSES FOR  CHARACTERS

class Character {
    constructor(name, img, strength, health, x, y, sx, sy) {
        this.img = img;
        this.name = name,
        this.strength = strength,
        this.health = health,
        this.x = x,
        this.y = y,
        this.sx = sx,
        this.sy = sy
    }

    receiveDamage = (enemy, damage) => {
        this.health -= damage;
        if (this.health > 0) {
          return `${this.name} has received ${damage} points of damage from ${enemy}. Now he has a health of ${this.health}`;
        } else {
          return `${this.name} has died in act of combat.`;
        }
    };

    draw = () => {
        //  STRUCTURE: context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
        // ctx.drawImage(this.img, 0, 0, 70, 65, this.x, this.y, canvas.width/ 13, canvas.height/ 13);
        ctx.drawImage(this.img, this.sx, this.sy, 70, 65, this.x, this.y, canvas.width/ 13, canvas.height/ 13);
    }
    
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

class Villain extends Character {
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

// let mage = new Mage('Mage', 6, 12, 80, 0, 2);
// let rogue = new Rogue('Rogue', 9, 9, 90, 3, 2);
// let finalBoss = new FinalBoss('Final Boss', 25, 14, 60, 3, 2);

window.onkeydown = function (e) {
    if (e.key === "ArrowLeft") {
      newWarrior.x -= 30;
      console.log(newWarrior.x, newWarrior.y);
    }
    if (e.key === "ArrowRight" && ((newWarrior.x <= canvas.width / 1.5))) {
      newWarrior.x += 30;
      console.log(newWarrior.x, newWarrior.y);
    }
    if (e.key === "ArrowUp" && ((newWarrior.x >= canvas.width / 1.7 && newWarrior.x <= canvas.width / 1.4) && (newWarrior.y >= canvas.height / 3))  
    || e.key === "ArrowUp" && (newWarrior.x >= 0 && newWarrior.x <= canvas.width / 14) && (newWarrior.y <= canvas.height / 2 && newWarrior.y >= 70)) {
        newWarrior.y -= 30;
        console.log(canvas.height)
        console.log(newWarrior.x, newWarrior.y);
      }
      if (e.key === "ArrowDown" && (newWarrior.y >= 258 && newWarrior.y <= 259)) {
        newWarrior.y += 30;
        console.log(newWarrior.x, newWarrior.y);
      }
};

let grunt = new Grunt('Grunt', 12, 5, 30, 1, 3);
let dragon = new Dragon('Dragon', 9, 10, 30, 2, 2);
let iceWoman = new IceWoman('Ice Woman', 5, 12, 25, 1 ,2);

// MOVEMENTS FOR THE CHARACTERS ON ENVIRONMENT

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

// background image 
let background = new Image();
background.src = '../images/Enviroment/temporaryBackground.png';

// warrior image
let character = new Image();
character.src = "../images/Characters/Frost Mage/3_DF_Actor.png";

// skeleton image
let skeleton = new Image();
skeleton.src = "../images/Characters/Frost Mage/3_DF_Actor.png";

// story background image
let storyBackground = new Image();
storyBackground.src = "../images/Enviroment/Carmilla's_Castle_(animated_series)_-_01.jpeg";


let newSkeleton = new Villain( 'Warrior', character, 12, 100 , canvas.width / 1.7, canvas.height / 10, 50, 260);
let newWarrior = new Warrior( 'Warrior', character, 12, 100 , 0, canvas.height / 1.7, 0, 0);

function animate() {
    storyMode();
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    animatedId = requestAnimationFrame(animate);
    newWarrior.draw();
    newSkeleton.draw();
}

function storyMode() {
    ctx.drawImage(storyBackground, 0, 0, canvas.width, canvas.height);
}




animate();