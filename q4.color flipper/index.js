// first  intialised text box and font element
// creted and array for colours
// using math.random generated numbers which is till length of array
// using if else changed color of background and font 



let clickMeBox=document.getElementById("box2");
let textBox = document.getElementById("textcolor");
let colors = ["red","blue","green","yellow"];
clickMeBox.addEventListener("click",function(){
    let number = Math.floor(Math.random()*colors.length);
    if (number == 0){
        document.body.style.backgroundColor ="red";
        textBox.style.color="red";


    }else if(number == 1){
        document.body.style.backgroundColor ="blue";
        textBox.style.color="blue";

    }else if(number == 2){
        document.body.style.backgroundColor ="green";
        textBox.style.color="green";
    }else if(number == 3){
        document.body.style.backgroundColor ="yellow";
        textBox.style.color="yellow";
        
    }else{
        document.body.style.backgroundColor ="white";
        textBox.style.color="white";
    }

  
    
})
