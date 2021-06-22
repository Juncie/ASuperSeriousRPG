
    const canvas = document.querySelector('canvas')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx  = canvas.getContext('2d', { alpha:false, desynchronized:true });
    // The display canvas' context. Draw the tile buffer here.
    const DISPLAY = document.querySelector('canvas').getContext('2d', { alpha:false, desynchronized:false });
    // The tile buffer canvas' context. Draw individual tiles here.
    const BUFFER  = document.createElement('canvas').getContext('2d', { alpha:false, desynchronized:true });
  


    /* ============================ TILES FUNCTIONALITY (BACKGROUND) ================================= */



    // This is the width and height for every tile.
    const TILE_SIZE = 32;
  
    // The TILES object contains "tile" objects with keys that correspond to the map values.
    const TILES = {};

    let grass = new Image ();
    grass.src = "../images/Grass.png"

    let tree = new Image ();
    tree.src = "../images/Tree.png"

    let wall = new Image ();
    wall.src= "../images/wall.png"

    let dirt = new Image;
    dirt.src= "../images/dirt.png";

    let door = new Image;
    door.src = "../images/door.png"
    
    const imageTiles = {
        0:{img:grass, sx:0, sy:0, sw:grass.width, sh:grass.height},
        1:{img:wall, sx:0, sy:0, sw:wall.width, sh:wall.height},
        2:{img:dirt, sx:0 , sy:0, sw:dirt.width, sh:dirt.height },
        3:{img:door, sx:0 , sy:0, sw:door.width, sh:door.height},
        4:{img:tree, sx:0 , sy:0, sw:tree.width, sh:tree.height}
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
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
  
    };
  
    // This will render tiles to the buffer.
    function renderTiles() {
  
      var map_index = 0; // This represents the position in the MAP.tiles array we're getting our tile value from.
  
      // Increment by the actual TILE_SIZE to avoid having to multiply on every iteration.
      for (var top = 0; top < MAP.height; top += TILE_SIZE) {
        for (var left = 0; left < MAP.width; left += TILE_SIZE) {
          var tile_value = MAP.tiles[map_index]; // Get the tile value from the map.
          var tile = TILES[tile_value]; // Get the specific tile object from the TILES object.
          // BUFFER.fillStyle = tile.color; // Now that we have the tile we can access its properties.
          BUFFER.fillRect(left, top, TILE_SIZE, TILE_SIZE); // Draw the tile at the left, top position and TILE_SIZE.
          let tree = imageTiles[tile_value]
          let grass = imageTiles[tile_value]
            // BUFFER.drawImage(tree.img, tree.sx, tree.sy, tree.sw, tree.sh, left, top, TILE_SIZE, TILE_SIZE)
            BUFFER.drawImage(grass.img, grass.sx, grass.sy,grass.sw, grass.sh, left, top, TILE_SIZE, TILE_SIZE)
          map_index ++; // Make sure to increment the map_index so we can get the next tile from the map.
        }
      }
    }
  
    // Render the buffer to the display.
    // If this example required a game loop or repeated draws, this would be your main rendering function.
    // The benefit of this approach is that you only make 1 drawImage call here instead of 1 call for every tile.
    function renderDisplay() {
  
      DISPLAY.drawImage(BUFFER.canvas, 0, 0);
  
    }
  
    // This function resizes the CSS width and height of the DISPLAY canvas to force it to scale to fit the window.
    function resize(event) {
  
      // Get the height and width of the window
      var height = document.documentElement.clientHeight;
      var width  = document.documentElement.clientWidth;
  
      // This makes sure the DISPLAY canvas is resized in a way that maintains the MAP's width / height ratio.
      if (width / height <= MAP.width_height_ratio) height = Math.floor(width  / MAP.width_height_ratio);
      else                                         width  = Math.floor(height * MAP.width_height_ratio);
  
      // This sets the CSS of the DISPLAY canvas to resize it to the scaled height and width.
      DISPLAY.canvas.style.height = height + 'px';
      DISPLAY.canvas.style.width  = width  + 'px';
  
    }
  
    // Set the initial width and height of the BUFFER and the DISPLAY canvases.
    BUFFER.canvas.width  = DISPLAY.canvas.width  = MAP.width;
    BUFFER.canvas.height = DISPLAY.canvas.height = MAP.height;
  
    // To ensure there is no anti-aliasing when drawing to the canvas, set image smoothing to false on both canvases.
    BUFFER.imageSmoothingEnabled = DISPLAY.imageSmoothingEnabled = false;


    
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
let newSkeleton = new Villain( 'Skeleton', character, 12, 100 , canvas.width / 1.7, canvas.height / 10, 50, 260);
let newWarrior = new Warrior( 'Warrior', character, 12, 100 , 0, canvas.height / 1.6, 0, 0);

/* ============================ ANIMATION ================================= */


let int = null;
let defaultPos = 705;
let currentPos = defaultPos;

// BEGGINING OF THE GAME (STORY)
story.onload = function() {
  ctx.drawImage(story, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "50px serif";
  ctx.fillText("The enemy is inside the cave! Go defeat him and only then everyone will live in peace", canvas.width / 6, canvas.height / 2, canvas.width / 1.3);
};

function animate() {
  requestAnimationFrame(animate);

  // WATCH OUT FOR CLEAR
  ctx.clearRect(0,0,canvas.width, canvas.height)
  renderTiles();
  renderDisplay();
  newWarrior.draw();
  newSkeleton.draw();
  window.addEventListener('resize', resize);
  // Calling resize forces the DISPLAY canvas to be scaled by the CSS.
  resize();
}

window.onkeydown = function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    console.log('WElCOME TO THE GAME');
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
    console.log(currentPos);
    console.log(MAP.tiles);
    // console.log(MAP.tiles[currentPos += TILE_SIZE]);
  }
  if (e.key === "ArrowDown") {
    if (MAP.tiles[currentPos + TILE_SIZE] === 2) {
      newWarrior.y += 32;
      currentPos += TILE_SIZE;
    }
    console.log(currentPos);
    console.log(MAP.tiles);
    // console.log(MAP.tiles[currentPos += TILE_SIZE]);
  }
};

// setTimeout(save, 100);