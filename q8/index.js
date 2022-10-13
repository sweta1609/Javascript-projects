let box2 = document.getElementById("box2");
let box1 = document.getElementById("box1");
let h2 = document.querySelector("h2");
let bodyColor = document.getElementById("body");
console.log(body);



box2.addEventListener('click',function onClick(){
    let occurEv1=document.getElementById("box2").style.transform ='translateX(129px)';
    console.log(occurEv1);
    bodyColor.style.backgroundColor="red";
    box1.style.backgroundColor="white";
    h2.style.color="white";
  
   
   
    
   
    
});

