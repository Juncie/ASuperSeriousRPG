let storySong = new Audio()
storySong.src = "../Assets/music/Story Song.mp3"
let Musicplay = false

let counter = 0;

window.onkeydown = function (e) {
    console.log(e.key);
    storySong.play()
    if (e.key === "Enter") {
      counter++;
      if (counter === 1) {
       document.querySelector('p').innerText = "Everyone had hoped of finding that one hero that could defeat him."; 
      }
      if (counter === 2) {
        document.querySelector('p').innerText = "This time you will be the hero they need... or not."
      }
      if (counter === 3) {
        window.location.href = "../Assets/Maps/forest/forest.html";
      }
    }
}