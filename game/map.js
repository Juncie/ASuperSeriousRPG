
    const canvas = document.querySelector('canvas')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx  = canvas.getContext('2d');

    /* ============================ TILES FUNCTIONALITY (BACKGROUND) ================================= */

    // This is the width and height for every tile.
    const TILE_SIZE = 32;
  
    // The TILES object contains "tile" objects with keys that correspond to the map values.
    const TILES = {};

    let grass = new Image ();
    grass.src = "../images/Grass.png"
    console.log(grass)

    let tree = new Image ();
    tree.src = "../images/Tree.png"

    let wall = new Image ();
    wall.src= "../images/wall.png"

    let dirt = new Image;
    dirt.src= "../images/dirt.png";

    let door = new Image;
    door.src = "../images/door.png"
    
    const imageTiles = {
      0:{img:grass},
      1:{img:wall},
      2:{img:dirt},
      3:{img:door},
      4:{img:tree}
  }
    
    // The map holds all the info about the map we will be drawing, including the tile indices array.
    const MAP = {
  
      columns: 32,
      rows:    32,
      height:  32 * TILE_SIZE,
      width:   32 * TILE_SIZE,
  
      // This is used during image scaling to ensure the rendered image is not skewed.
      width_height_ratio: 32 / 32,
  
      // The values in this array correspond to the keys in the TILES object.

      // tiles:[0,1,2,0,1,2,0,1,2]
      tiles:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
             1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
             1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
             1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,
             2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,
             2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
  
    // This will render tiles to the buffer.
    function renderTiles() {
  
      var map_index = 0; // This represents the position in the MAP.tiles array we're getting our tile value from.
      
      // Increment by the actual TILE_SIZE to avoid having to multiply on every iteration.
      for (var top = 0; top < MAP.height; top += TILE_SIZE) {
        for (var left = 0; left < MAP.width; left += TILE_SIZE) {
          var tile_value = MAP.tiles[map_index]; // Get the tile value from the map.
          ctx.fillRect(left, top, TILE_SIZE, TILE_SIZE); // Draw the tile at the left, top position and TILE_SIZE.
          let tile = imageTiles[tile_value]
          ctx.drawImage(tile.img, left, top, TILE_SIZE, TILE_SIZE)
          map_index ++; // Make sure to increment the map_index so we can get the next tile from the map.
        }
      }
    }

    
/* ============================ CLASSES AND FUNCTIONALITIES FOR CHARACTERS ================================= */


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
      ctx.drawImage(this.img, this.sx, this.sy, 70, 65, this.x, this.y, canvas.width/ 13, canvas.height/ 13);
  }
}


// warrior image
let character = new Image();
character.src = "../images/warrior.png";

// skeleton image
let skeleton = new Image();
skeleton.src = "../images/warrior.png";

// story background image
let story = new Image();
story.src = "../images/storyCastle.jpeg";

// INSTANCES OF CLASSES
let newSkeleton = new Character( 'Skeleton', character, 12, 100 , canvas.width / 1.7, canvas.height / 10, 50, 260);
let newWarrior = new Character( 'Warrior', character, 12, 100 , 0, canvas.height / 1.6, 0, 0);

/* ============================ ANIMATION ================================= */

let int = null;
let defaultPos = 705;
let currentPos = defaultPos;

// BEGGINING OF THE GAME (STORY)
story.onload = function() {
  ctx.drawImage(story, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "50px serif";
  ctx.fillText("GOOD LUCK! PRESS ENTER", canvas.width / 6, canvas.height / 2, canvas.width / 1.3);
};

function animate() {
  requestAnimationFrame(animate);

  // WATCH OUT FOR CLEAR
  ctx.clearRect(0,0,canvas.width, canvas.height)
  renderTiles();
  console.log("animate");
  newWarrior.draw();
  newSkeleton.draw();
}

window.onkeydown = function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    console.log('WElCOME TO THE GAME', grass, grass.width, grass.height);
    // resize();
    animate()
  }

  // MOVEMENT OF THE MAIN CHARACTER
  if (e.key === "ArrowLeft") {
    if (MAP.tiles[currentPos - 1] === 2) {
      newWarrior.x -= 32;
      currentPos -= 1;
    }
    console.log(currentPos);
    // console.log(MAP.tiles[currentPos + 1]);
    console.log(MAP.tiles);
  }
  if (e.key === "ArrowRight") {
    if (MAP.tiles[currentPos + 1] === 2) {
      newWarrior.x += 32;
      currentPos += 1;
      if ((currentPos === 210 || currentPos === 211 )
        || (currentPos === 178 || currentPos === 179)) {
          window.location.href = "../battle/battle.html";

      }
      console.log(currentPos);
      // console.log(MAP.tiles[currentPos + 1]);
      console.log(MAP.tiles);
    }
  }
  if (e.key === "ArrowUp") {
    if (MAP.tiles[currentPos - TILE_SIZE] === 2) {
      newWarrior.y -= 32;
      currentPos -= TILE_SIZE;
    }   
  }
  if (e.key === "ArrowDown") {
    if (MAP.tiles[currentPos + TILE_SIZE] === 2) {
      newWarrior.y += 32;
      currentPos += TILE_SIZE;
    }
  }
};