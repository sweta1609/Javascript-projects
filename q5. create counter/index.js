// let increase = document.getElementById("box23");
// let reset = document.getElementById("box22");
// let decrease = document.getElementById("box21");
// let number = document.getElementById("number");
// let count=0;
// increase.addEventListener('click',function(){
//     count++
//     number.innerHTML=count;
//        increase.style.color ="red";
  
   

// })
// decrease.addEventListener('click',function(){
//     count--
//     number.innerHTML=count;
   
//         decrease.style.color ="green";
   

// })
// reset.addEventListener('click',function(){
//     count=0
   
//         reset.style.color ="yellow";
  

// })



const button = document.querySelectorAll('.btns');
const value = document.querySelector("#value");

let count = 0;

button.forEach(function(btns){
    btns.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains("decrease")){
         
            count--;
            
        }else if(styles.contains("increase")){
            count++;
            
        }else{
            count =0;
       
        }
        
        if(count>0){
            value.style.color='red';
        
        }
        if(count<0){
            value.style.color='green';
           
        }
        if(count === 0){
            value.style.color='blue';
          
        }
           
        
       
        value.innerHTML= count;

    });

});


