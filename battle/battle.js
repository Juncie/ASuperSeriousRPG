let slasheff = new Audio()
slasheff.src="../Assets/music/physical attack.mp3"

let bkrdMusic = new Audio()
bkrdMusic.src = "" 
let Musicplay = false

//PLACE INSIDE OF A FUNCTION
// if(!Musicplay){
//   console.log(Musicplay)
//   bkrdMusic.play()
//   Musicplay = true;
// }


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
          return `${this.name} received ${damage} point(s) of damage from ${enemy.name}. They now have a health of ${this.health}`;
        } else {
          return `${this.name} died in act of combat.`;
        }
    };
    physicalAttack = (enemy) => {
        return enemy.receiveDamage(this, Math.floor(Math.random() * this.strength));
    }
    spellAttack = (enemy, round) => {
        if (this.spellCooldownCounter <= round || this.spellCooldownCounter == 0){
            this.spellCooldownCounter = round + this.spellCooldown;
            return enemy.receiveDamage(this, Math.floor(Math.random() * this.spellPower)+1);
        }
    }
}


class Warrior extends Character {
<<<<<<< HEAD
=======

>>>>>>> 5c33dfd133bd75a668fd4ebc4ddcb5fffc3ea473
  receiveDamage = (enemy, damage) => {

      if (this.defenseUsed === true){
          let warrior = this;
          console.log(`Original damage ${damage} - Reduced Damage ${damage/2}`)
          damage = damage / 2
          this.health -= damage;
          if (this.health <= 28) {
            document.querySelector('.bar').style.backgroundColor = "red";
            setTimeout(function() { document.querySelector('.bar').style.width = warrior.health  * 2 + "px";},3000) 
          } else {
            setTimeout(function() { document.querySelector('.bar').style.width = warrior.health  * 2 + "px";},3000) 
          }
          this.defenseUsed = false;
      } else {
            let warrior = this;
            this.health -= damage;
            if (this.health <= 28) {
                document.querySelector('.bar').style.backgroundColor = "red";
                setTimeout(function() { document.querySelector('.bar').style.width = warrior.health  * 2 + "px";},3000) 
              } else {
                setTimeout(function() { document.querySelector('.bar').style.width = warrior.health  * 2 + "px";},3000) 
              }
      }
      if (this.health > 0) {
        let warr = this;
         setTimeout(function() { document.querySelector('p').innerText = `${warr.name} received ${damage} point(s) of damage from ${enemy.name}. Now he a health of ${warr.health}`;},3000) 
        
          return `${this.name} received ${damage} point(s) of damage from ${enemy.name}. Now he a health of ${this.health}`;
      } else {        
        
        setTimeout(function() { document.querySelector('.bar').style.width = "0px";},3000) 
<<<<<<< HEAD
        setTimeout(function() {document.querySelector('p').innerText = `You died in act of combat.`},1000)
        setTimeout(function() { window.location.replace("Game Over.html"); }, 4000);
        return `${this.name} has been slain!.`;
=======
        document.querySelector('p').innerText = `You died in act of combat.`
        setTimeout(function() { window.location.replace("../ending/gameOver.html"); }, 6000);
        return `${this.name} has died in act of combat.`;
>>>>>>> 5c33dfd133bd75a668fd4ebc4ddcb5fffc3ea473
      }
  };
  defense = (round) => {
      if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 1){
          this.defenseCooldownCounter = round + this.defenseCooldown;
          this.defenseUsed = true;
         document.querySelector('p').innerText = `Warrior raised his shield! He will receive half damage on the next attack!`
          return `Warrior raised his shield! He will receive half damage on the next attack!`
      }
  }
}


class FinalBoss extends Character {
  spell = () => {
      console.log('Siphon Soul')
  }
  receiveDamage = (enemy, damage) => {
    if (this.health <= 16) {
        document.querySelector('.bar2').style.backgroundColor = "red";
        document.querySelector('.bar2').style.width = this.health * 2 + "px";
      } else {
        document.querySelector('.bar2').style.width = this.health * 2 + "px";
      }

      if (this.defenseUsed === true){
          damage = damage/2;
          this.health -= damage;
          this.defenseUsed = false;
          document.querySelector('.bar2').style.width = this.health * 2 + "px";
      } else {
          this.health -= damage;
          document.querySelector('.bar2').style.width = this.health * 2 + "px";
      }
      if (damage > 0){
        hurt();
    }
      if (this.health > 0) {
        // document.querySelector('.bar2').style.width = this.health * 2 + "px";
        document.querySelector('p').innerText = `${this.name} received ${damage} point(s) of damage from ${enemy.name}. He now a health of ${this.health}`;
        return `${this.name} received ${damage} point(s) of damage from ${enemy.name}. He now a health of ${this.health}`;
      } else {
        dead();
        let boss = this;
        document.querySelector('.bar2').style.width =  "0px"; 
        setTimeout(function() { document.querySelector('p').innerText = `Boss has died in act of combat.`;},3000);
<<<<<<< HEAD
        setTimeout(function() { window.location.replace("../battle/Good ending.html"); }, 6000);
=======
        setTimeout(function() { window.location.replace("../ending/ending.html"); }, 6000);
>>>>>>> 5c33dfd133bd75a668fd4ebc4ddcb5fffc3ea473
        return `${boss.name} has died in act of combat.`;
      }
  };
  defense = (round) => {
      if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 2){
          this.defenseCooldownCounter = round + this.defenseCooldown;
          this.defenseUsed = true;
          document.querySelector('p').innerText = `Final Boss used Demoralize! He will take half damage in the next round.`;
          return `Final Boss used Demoralize! His damage taken is halved for 1 turn!`
      }
  }
}

class Dragon extends Character {
  spell = () => {
      console.log('Breath Fire');
  }

  receiveDamage = (enemy, damage) => {
    if (this.health <= 12) {
        document.querySelector('.bar2').style.backgroundColor = "red";
        document.querySelector('.bar2').style.width = this.health * 2 + "px";
      } else {
        document.querySelector('.bar2').style.width = this.health * 2 + "px";
      }
    if (this.defenseUsed === true){
        this.defenseUsed = false;
        document.querySelector('p').innerText = `${enemy.name} received ${damage} point(s) of damage from their own attack! They now have a health of ${enemy.health}`
        return `${enemy.name} received ${damage} point(s) of damage from their own attack! They now have a health of ${enemy.health}`
    } else {
          this.health -= damage;
    }
    if (damage > 0){
      hurt();
  }
    if (this.health > 0) {
      document.querySelector('.bar2').style.width = this.health * 2 + "px";
      document.querySelector('p').innerText =`${this.name} received ${damage} point(s) of damage from ${enemy.name}. Now he a health of ${this.health}`
      return `${this.name} received ${damage} point(s) of damage from ${enemy.name}. Now he a health of ${this.health}`;
    } else {
      dead();
      document.querySelector('.bar2').style.width =  "0px"; 
      let dragon = this;                                        
      setTimeout(function() { document.querySelector('p').innerText = `${dragon.name} died in act of combat.`},3000);
      setTimeout(function() { window.location.replace("../Assets/Maps/Boss Room/Boss.html"); }, 4000);
      return `${this.name} died in act of combat.`;
    }
};

defense = (round) => {
    
      if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 2){
          this.defenseCooldownCounter = round + this.defenseCooldown;
          this.defenseUsed = true;
          setTimeout(function() {document.querySelector('p').innerText = `Dragon used Mirror Image. Enemy will take their own damage`},3000);
          return `Dragon used Mirror Image. Enemy will take their own damage`
      }
  }
}

class Lich extends Character {
  spell = () => {
    console.log('Scream')
  }
  receiveDamage = (enemy, damage) => {
      if (this.defenseUsed === true){
          this.health -= damage;
          if (this.health <= 10) {
            document.querySelector('.bar2').style.backgroundColor = "red";
            document.querySelector('.bar2').style.width = this.health * 2 + "px";
          } else {
            document.querySelector('.bar2').style.width = this.health * 2 + "px";
          }
          this.defenseUsed = false;
          document.querySelector('p').innerText = `${enemy.name} received ${damage} point(s) of damage from their own attack! They now have a health of ${enemy.health}`
          return `${enemy.name} received ${damage} point(s) of damage from their own attack! They now have a health of ${enemy.health}`
      } else {
            this.health -= damage;
            if (this.health <= 10) {
                document.querySelector('.bar2').style.backgroundColor = "red";
                document.querySelector('.bar2').style.width = this.health * 2 + "px";
              } else {
                document.querySelector('.bar2').style.width = this.health * 2 + "px";
              }
      }
      if (damage > 0){
        hurt();
      } 
      if (this.health > 0) {
        document.querySelector('.bar2').style.width = this.health * 2 + "px";
        document.querySelector('p').innerText =`${this.name} received ${damage} point(s) of damage from ${enemy.name}. Now he a health of ${this.health}`
        return `${this.name} received ${damage} point(s) of damage from ${enemy.name}. Now he a health of ${this.health}`;
      } else {
        dead();
        document.querySelector('.bar2').style.width =  "0px"; 
        let lich = this;
        setTimeout(function() { document.querySelector('p').innerText = `${lich.name} died in act of combat.`},1000);
        setTimeout(function() { window.location.replace("../Assets/Maps/Cave/cave.html"); }, 4000);
        return `${this.name} died in act of combat.`;
      }
  };
  defense = (round) => {
    if (this.defenseCooldownCounter <= round || this.defenseCooldownCounter == 2){
        this.defenseCooldownCounter = round + this.defenseCooldown;
        this.health += 10;
        document.querySelector('.bar2').style.width = this.health * 2 + "px";
        document.querySelector('p').innerText = `Lich used heal. His health is now ${this.health}`
        return `Lich used heal! His health is now ${this.health}`
    }
}
  
}


<<<<<<< HEAD
let warrior = new Warrior('Warrior', 13, 10, 140, 2, 2);
let finalBoss = new FinalBoss('Final Boss', 25, 14, 1, 3, 2);
let lich = new Lich('lich', 11, 15, 70, 1, 3);
let dragon = new Dragon('Dragon', 14, 10, 85, 2, 2);

=======
let warrior = new Warrior('Warrior', 12, 6, 140, 2, 2);
let finalBoss = new FinalBoss('Final Boss', 25, 14, 80, 3, 2);
let lich = new Lich('lich', 12, 5, 50, 1, 3);
let dragon = new Dragon('Dragon', 9, 10, 60, 2, 2);
>>>>>>> 5c33dfd133bd75a668fd4ebc4ddcb5fffc3ea473
function fight (hero,enemy) {

  let round = 0;
    document.querySelectorAll("#attack-list li").forEach(function (li) {
      li.addEventListener("click", function (event) {
        doFight(event)   
        if (li.innerText === 'ATTACK'){
          slasheff.play()
  
      } 
      })
    }  
    );
    
    
    function doFight(event){
        if (hero.health<=0 || enemy.health <=0){
            console.log('Someone died so will not run anything');
            return
        } 
        console.log(round);
        let playerChoice = event.target.innerText.slice(0,1).toLowerCase();
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
            document.removeEventListener('click',doFight);
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
        if (hero.health>0 && enemy.health > 0){
            round++;
        } 
  };
}

let item = document.querySelectorAll('li')
var hoverSound = document.getElementsByClassName("hoverSE")[0];

for(let eachItem of item) {

eachItem.addEventListener("mouseover", func, false);
eachItem.addEventListener("mouseout", func1, false);

function func()
{  
   eachItem.setAttribute("style", "background-color:#fff237a1;")
   hoverSound.play();
}

function func1()
{  
   eachItem.setAttribute("style", "color:white;")
}

}



function hurt(){
    opacity=0 //opacity of image
    var increase=1 //increase opacity indicator
    var decrease=0 //decrease opacity indicator

    function fade(){
    if (opacity<0.6&&increase)
    opacity+=0.05
    else{
    increase=0
    decrease=1
    }
    
    if (opacity>0.3&&decrease)
    opacity-=0.05
    else{
    increase=1
    decrease=0
    }
    
    document.getElementById('villain').style.opacity=opacity
    }
    
    let interval = setInterval(fade,100);
    setTimeout(function(){clearInterval(interval);document.getElementById('villain').style.opacity=1},3000);
}

  function dead() {
   document.getElementById('villain').style.display = 'none';
  }
<<<<<<< HEAD
=======

// window.onload = fight(warrior, lich);

// added 

// document.querySelector('.hit').style.width = "10%";
>>>>>>> 5c33dfd133bd75a668fd4ebc4ddcb5fffc3ea473
