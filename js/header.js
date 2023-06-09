const hamburger = document.querySelector(".hamburger");
const nav  = document.getElementsByTagName("nav");
const a = nav[0].getElementsByTagName("a")

console.log(a)

hamburger.addEventListener("click", (event) =>{
    nav[0].classList.toggle("nav_opacity");
    for(let i=0; i<a.length; i++){
        a[i].classList.toggle("a_display")
    }
    
})