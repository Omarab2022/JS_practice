const vedio = document.querySelector(".ved");
const btn = document.getElementById("btn");
const fill =  document.querySelector(".fill");

btn.addEventListener('click' , function(){

   if(!fill.classList.contains("right")){

    fill.classList.add("right");
    vedio.pause();
    
   }

   else{
    fill.classList.remove("right");
    vedio.play();
   }




})