const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ground = new Image ();
ground.src = '../../tileSets/Cave.png'
// ground.onload = draw;

const layer2 = new Image ();
layer2.src = '../../tileSets/bossLevel.png'
// layer2.onload = draw;
// console.log(draw);


const boss = new Image();
boss.src = "../../enemies/BossImg.png"

const warr = new Image ();
warr.src = "../../../images/warrior back.png"


const layerOneMap = [
  146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,
  146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,
  146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,146,146,146,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,146,146,61,61,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,146,61,61,61,61,61,146,146,146,146,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,146,146,146,146,61,61,61,61,61,61,61,146,146,146,61,61,61,61,61,
  146,146,61,61,61,61,61,61,61,61,61,61,61,146,146,146,61,61,61,61,61,61,61,61,61,61,146,146,61,61,61,61,
  146,146,146,146,146,146,146,146,146,146,146,146,146,61,61,61,61,61,61,61,61,61,61,61,146,146,146,146,146,146,146,146,
  146,146,146,146,146,146,146,146,146,146,146,146,146,61,61,61,61,61,61,61,61,61,61,61,61,146,146,146,146,146,146,146,
  146,146,146,146,146,146,146,146,146,146,146,146,146,61,61,61,61,61,61,61,61,61,61,61,61,146,146,146,146,146,146,146
  ]
  const tileSize = 32;
  const tileOutputSize = .89;
  const updatedTileSize = tileSize * tileOutputSize;
  
  const tileCol = 16;
  const tileRow = 16;
  const mapCols = 32;
  const mapRows = 32;
  

  const mapHeight = mapRows * tileSize;
  const mapWidth = mapCols * tileSize;
  
let mapIndex = 0;
let sourceX = 0;
let sourceY = 0;

function draw () {
  
  let mapIndex = 0;

  for (let col = 0; col < mapHeight; col += tileSize) {
     for (let row = 0; row < mapWidth; row += tileSize) {
       let tileVal = layerOneMap[mapIndex];
       if (tileVal != 0) {
         tileVal -= 1;
         sourceY = Math.floor(tileVal / tileCol) * tileSize;
         sourceX = (tileVal % tileCol) * tileSize;
         ctx.drawImage(ground, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, updatedTileSize, updatedTileSize);

         if (currentPos === mapIndex) {
          newWarrior.x = (row * tileOutputSize) - 16
          newWarrior.y = (col - 1.8* tileSize) * tileOutputSize
          
         }
         mapIndex ++;
        }
    }
  }
  ctx.drawImage(layer2, 0,0,mapWidth,mapHeight)
  ctx.drawImage(boss, 400,200,150,150)
  newWarrior.draw();

}


// DRAWING AND ANIMATING THE CHARACTER

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

  draw = () => {
    ctx.drawImage(this.img, this.sx, this.sy, 50, 65, this.x, this.y, canvas.width / 38, canvas.height / 20);
  }
}

let defaultPos = 977 ;


let currentPos = defaultPos;

//  warrior image
let character = new Image();
character.src = "../../../images/warrior back.png";
let characterDown = new Image();
characterDown.src = "../../../images/warrior_down.png"
let characterLeft = new Image();
characterLeft.src = "../../../images/warrior_left.png"
let characterRight = new Image();
characterRight.src = "../../../images/warrior.png"


// INSTANCES OF CLASSES
let newWarrior = new Character('Warrior', character, 0, 0, ((defaultPos / 32) % tileSize) * 32, defaultPos / 32 * tileSize, 0, 0);


function animate() {
  requestAnimationFrame(animate);
ctx.clearRect(0, 0, canvas.width, canvas.height)

  draw();
  }

window.onload = animate;

window.onkeydown = function (e) {

  // MOVEMENT OF THE MAIN CHARACTER
  if (e.key === "ArrowLeft") {
    if (layerOneMap[currentPos - 1] === 61) {
      newWarrior.img = characterLeft;
      currentPos -= 1;
  
     }
     console.log(layerOneMap[currentPos + 1])
  }
  if (e.key === "ArrowRight") {
    if (layerOneMap[currentPos + 1] === 61) {
      newWarrior.img = characterRight;
      //newWarrior.x += 16;
      currentPos += 1;
      
     }
     console.log(layerOneMap[currentPos - 1])
  }
  if (e.key === "ArrowUp") {
    if (layerOneMap[currentPos - 32] === 61) {
      newWarrior.img = character;
      currentPos -= 32;
      
     }
     console.log(layerOneMap[currentPos + 32])
  }
  if (e.key === "ArrowDown") {
    if (layerOneMap[currentPos + 32] === 61) {
      newWarrior.img = characterDown;
      currentPos += 32;
     }
    
  }
  if (currentPos >= 771 && currentPos <= 796 ){
    window.location.replace("../../../battle/battle3.html");
   }
};