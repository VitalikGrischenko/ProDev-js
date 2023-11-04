const dino = document.getElementById("dino-game");
const cactus = document.getElementById("cactus")


function jump() {
    if(dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function (){
        dino.classList.remove("jump")
    }, 300);
  }
}

document.addEventListener("click", function(event) {
    jump();
});

var isAlive = setInterval (function () {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

if(cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over")
}
}, 10)


