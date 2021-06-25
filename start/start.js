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
        document.querySelector('.content').innerHTML = "<p>A long time ago, in a land about a 32 pixels away...</p>"; 
       }
      if (counter === 2) {
       document.querySelector('.content').innerHTML = "<p>Or was it 16-pixels?</p>"; 
      }
      if (counter === 3) {
        document.querySelector('.content').innerHTML = "<p>Doesn't matter, anyway, there was a noble Warrior who heard word of a village seeking protection from monsters</p>"; 
      }
      if (counter === 4) {
        document.querySelector('.content').innerHTML = "<p>The Warrior, too afraid to fight monsters, left the village and went into the forest to hide instead</p>"; 
      }
      if (counter === 5) {
        document.querySelector('.content').innerHTML = "<p>But little did he know...</p>"; 
      }
      if (counter === 6) {
        window.location.href = "../Assets/Maps/forest/forest.html";
      }
    }
}