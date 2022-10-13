let boxBig = document.getElementById("box");
let countClick = document.getElementById("count-down");
let count = 0;


boxBig.addEventListener("click",clickCounter);
console.log(countClick.innerHTML);
function clickCounter(){
    count++;
    console.log(count);
    countClick.innerText= count;
   
 
     

}
clickCounter();