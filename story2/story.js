

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx  = canvas.getContext('2d', { alpha:false, desynchronized:true });


// story background image
let story = new Image();
story.src = "../images/storyCastle.jpeg";

story.onload = function() {
    ctx.drawImage(story, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "50px serif";
    ctx.fillText("Everyone had hoped of finding that one hero that could defeat him", canvas.width / 6, canvas.height / 2, canvas.width / 1.3);
};

window.onkeydown = function (e) {
    console.log(e.key);
    if (e.key === "Enter") {
      console.log('WElCOME TO THE GAME');
      window.location.href = "../story3/story.html";
    }
}