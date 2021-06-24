const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const grass = new Image();
grass.src = '../../tilesets/Forest.png'

const tileSize = 16;
const tileOutputSize = 1;
const updatedTileSize = tileSize * tileOutputSize;

const tileCol = 32;
const tileRow = 32;

const mapCols = 32;
const mapRows = 32;

const mapHeight = mapRows * tileSize;
const mapWidth = mapCols * tileSize;

const layerOneMap = [

]





let mapIndex = 0;
let sourceX = 0;
let sourceY = 0;

function draw() {

  let mapIndex = 0;

  for (let col = 0; col < mapHeight; col += tileSize) {
    for (let row = 0; row < mapWidth; row += tileSize) {
      let tileVal = layerOneMap[mapIndex];  
      if (tileVal != 0) {
        tileVal -= 1;
        sourceY = Math.floor(tileVal / tileCol) * tileSize;
        sourceX = (tileVal % tileCol) * tileSize;
        ctx.drawImage(grass, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, updatedTileSize, updatedTileSize);

        if (currentPos === mapIndex) {
          newWarrior.x = row * tileOutputSize
          newWarrior.y = (col - tileSize) * tileOutputSize
          newWarrior.w = updatedTileSize
          newWarrior.h = updatedTileSize

          newWarrior.draw();
        }
        //ctx.drawImage(this.img, this.sx, this.sy, 70, 65, this.x, this.y, canvas.width / 28, canvas.height / 20);

      }

      mapIndex++;
    }
  }
}

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
    ctx.drawImage(this.img, this.sx, this.sy, 70, 65, this.x, this.y, canvas.width / 28, canvas.height / 20);
  }
}


// let defaultPos = 1011;
let defaultPos = 700;


let currentPos = defaultPos;

// warrior image
let character = new Image();
character.src = "../../../images/warrior.png";

// dragin image
let dragon = new Image();
dragon.src = "../../enemies/Bone_Dragon.png";

// INSTANCES OF CLASSES
let newWarrior = new Character('Warrior', character, 123, 100, ((defaultPos / 32) % tileSize) * 32, defaultPos / 32 * tileSize, 0, 0);




function animate() {
  requestAnimationFrame(animate);
  // WATCH OUT FOR CLEAR
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  draw();
  newWarrior.draw();
  ctx.drawImage(dragon, canvas.width / 13, canvas.height / 7, 250, 150)
}

window.onload = animate;

window.onkeydown = function (e) {

  // MOVEMENT OF THE MAIN CHARACTER
  if (e.key === "ArrowLeft") {
    if (layerOneMap[currentPos - 1] === 452) {
      //newWarrior.x -= 16;
      currentPos -= 1;

    }
  }
  if (e.key === "ArrowRight") {
    if (layerOneMap[currentPos + 1] === 452) {
      //newWarrior.x += 16;
      currentPos += 1;
    }
  }
  if (e.key === "ArrowUp") {
    if (layerOneMap[currentPos - 32] === 452) {
      // newWarrior.y -= 16;
      currentPos -= 32;
    }
  }
  if (e.key === "ArrowDown") {
    if (layerOneMap[currentPos + 32] === 452) {
      // newWarrior.y += 16;
      currentPos += 32;
    }
  }
  console.log(currentPos)
  // if (currentPos <= 600) {
  //    window.location.href = "../battle/battle.html";
  // } 
};
