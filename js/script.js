// onload function
function preload(){
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none"
}

// onscroll function

var backt = document.querySelector(".back");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 400){
        backt.style.display = "block";
    } else {
        backt.style.display = "none";
    }
    
})