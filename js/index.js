// Your code goes here
//console.log(document.querySelector(".nav"));
let swagger = document.querySelector("nav");
//console.log(swagger)
let mousey = document.querySelector(".intro")
const moreZ = mousey.getElementsByTagName("p")

 document.addEventListener('keydown', function(event){
       //console.log("Pressed a key turned it red");
       for(let i=0; i<swagger.getElementsByTagName('a').length; i++){
       swagger.getElementsByTagName('a')[i].style.color = 'red';
       }
      
  });

  document.addEventListener('keyup', function(event){
      //console.log("Rest a key turned it back");
      for(let i=0; i<swagger.getElementsByTagName('a').length; i++){
      swagger.getElementsByTagName('a')[i].style.color = 'black';
      }
     
 });

 document.addEventListener("mouseover", function(event){
       
      event.target.style.color = 'blue';
 });
 document.addEventListener("mouseout", function(event){
       
      event.target.style.color = 'teal';
 });

 document.addEventListener('dblclick', (event) => {
      event.target.style.background = 'pink';    
    }, true);

    document.addEventListener("click", function(event){
       
      event.target.style.background = 'white';
 });

 window.addEventListener('load', function(event){
      console.log('page is fully loaded');
    });


    
    
    document.addEventListener("wheel", function(event){
       
      event.target.style.fontSize = '35px';
 });

 document.addEventListener("contextmenu", function(event){
       
      alert("You right-clicked inside the div!")
 });

 document.addEventListener("scroll",function(event){
            var x = Math.floor(Math.random() * 32);
            var y = Math.floor(Math.random() * 32);
            var z = Math.floor(Math.random() * 32);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            setTimeout(funny(), 100000);
      document.body.style.background =  bgColor;
 });


 function funny(){
      //console.log(bgColor)
      return 0;
    
 }
 
