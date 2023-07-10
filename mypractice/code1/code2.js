const count = document.getElementById("count");
const inc = document.getElementById("increase");
const dic = document.getElementById("decrease");
const reset = document.getElementById("reset");

let counter = 0 ;

inc.addEventListener("click" , function (){

    counter = counter + 1 ; 
    count.textContent=counter;
    count.style.color = "blue" ;
    



})

dic.addEventListener("click" , function (){

    counter = counter - 1 ; 
    count.textContent=counter;
    count.style.color = "red" ;
    

})

reset.addEventListener("click" , function (){

    counter = 0 ; 
    count.textContent="00";

    

})