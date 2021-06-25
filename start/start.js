let storySong = new Audio()
storySong.src = "../Assets/music/Story Song.mp3"
let Musicplay = false

let counter = 0;

window.onkeydown = function (e) {
    storySong.play()
    console.log(e.key);
    if (e.key === "Enter") {
      counter++;
      if (counter === 1) {
        document.querySelector('.content').innerHTML = "<p>A long time ago there was a monster that terrified the whole forest.</p>"; 
       }
      if (counter === 2) {
       document.querySelector('.content').innerHTML = "<p>Everyone had hoped of finding that one hero that could defeat him.</p>"; 
      }
      if (counter === 3) {
        document.querySelector('.content').innerHTML = "<p>This time you will be the hero they need... or not.</p>"; 
      }
      if (counter === 4) {
        window.location.href = "../Assets/Maps/forest/forest.html";
      }
    }
}