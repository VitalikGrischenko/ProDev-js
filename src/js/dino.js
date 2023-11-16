const dino = document.getElementById("dino-game");
const cactus = document.getElementById("cactus");
const start = document.querySelector(".game")

start.addEventListener("click", () => {



document.addEventListener("keydown", function(event) {
    mov();
});

function mov() {
    if(cactus.classList != "cactusMov") {
    cactus.classList.add("cactusMov");

    // setTimeout(function (){
    //     cactus.classList.remove("cactusMov")
    // }, 300);
  }
}

    document.addEventListener("keydown", function(event) {
        jump();
    });
    
    function jump() {
        if(dino.classList != "jump") {
        dino.classList.add("jump");
    
        setTimeout(function (){
            dino.classList.remove("jump")
        }, 300);
      }
    }
})
    function restart( ) {
        document.location.reload()
    }
    
    
    let isAlive = setInterval (function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140 && isAlive   ) {

        alert("Game Over")
        alert(restart())
    
    }
    })


