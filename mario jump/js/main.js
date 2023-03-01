const mario = document.querySelector(".mario")
const pipe  = document.querySelector(".pipe")

function jump () {

    mario.classList.add("jump");

    setTimeout(()=> {
        mario.classList.remove("jump")
    },500)
 
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","" );
    
   if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 80){
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = "none";
    mario.style.left = `${marioPosition}px`

    mario.src = "../img/game over.webp"
    mario.style.marginBottom = "100px"
    mario.style.width = "70px"
    

    clearInterval(loop)

   }

},10)

   
document.addEventListener("keydown", jump);





