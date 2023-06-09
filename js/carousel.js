const container = document.querySelector("#container");
const dot_container = document.querySelector("#dot_cont");
const dot = dot_container.getElementsByTagName("span");
const slides = container.getElementsByClassName("mySlides");


slides[1].classList.toggle("switch");
slides[2].classList.toggle("switch");
slides[3].classList.toggle("switch");
slides[4].classList.toggle("switch");
slides[5].classList.toggle("switch");





dot[0].addEventListener("click", (event)=>{
    
    slides[2].style.display="none";
    slides[1].style.display= "none";
    slides[0].style.display= "grid";
    console.log("clicked1")
   
})

dot[1].addEventListener("click", (event)=>{
    
    slides[2].style.display="none";
    slides[0].style.display= "none";
    slides[1].style.display= "grid";
    console.log("clicked2")
   
})

dot[2].addEventListener("click", (event)=>{
    
    slides[1].style.display="none";
    slides[0].style.display= "none";
    slides[2].style.display= "grid";
    console.log("clicked3")
})