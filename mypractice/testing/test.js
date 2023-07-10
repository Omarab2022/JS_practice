const btn = document.getElementById("btn");
const colors = [ "red" , "green" , "yellow" , "black" , "blue" , "rgba(133,122,200)"];
const cont = document.querySelector(".container") ; 
const title = document.getElementById("title");



btn.addEventListener("click" , function() {

  const number = getrandom();

  document.body.style.backgroundColor = colors[number];

  title.textContent= `background color : ${colors[number]}` ; 



});

 function getrandom(){
    return Math.floor(Math.random() * colors.length);

}