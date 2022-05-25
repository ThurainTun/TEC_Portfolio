

let hamburgarComtainerTag = document.querySelector(".hamburgerContainer");

let line1Tag = document.querySelector(".lineA")
let line2Tag = document.querySelector(".lineB")
let line3Tag = document.querySelector(".lineC")

let menuContainerTag = document.querySelector(".menuContainer")

let liTag = document.getElementsByTagName("li")

hamburgarComtainerTag.addEventListener("click", () => {
    if(hamburgarComtainerTag.classList.contains("pp")){
        line2Tag.classList.remove("hide");
        line1Tag.classList.remove("rotate1");
        line3Tag.classList.remove("rotate3");
        hamburgarComtainerTag.classList.remove("pp")
        menuContainerTag.classList.remove("shoeMenu");
        for(let i = 0;i < liTag.length;i++ ){
            liTag[i].classList.remove("up")
        }
        
    } else {
        line2Tag.classList.add("hide");
        line1Tag.classList.add("rotate1");
        line3Tag.classList.add("rotate3");
        hamburgarComtainerTag.classList.add("pp")
        menuContainerTag.classList.add("shoeMenu");
        for(let i = 0;i < liTag.length;i++ ){
            liTag[i].classList.add("up")
        }
        
    }
})