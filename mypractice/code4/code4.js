

const btn1 = document.getElementById("btn");
const btn2 = document.querySelector(".btn2");
const cont2= document.querySelector(".cont2");

btn1.addEventListener('click' , function(){


cont2.classList.add("visible");

})

btn2.addEventListener( 'click' , function(){
    cont2.classList.remove("visible");
})