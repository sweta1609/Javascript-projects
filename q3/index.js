let outerBox = document.getElementById("box");
let innerBox = document.getElementById("box1");
outerBox.addEventListener("click",function(){
    console.log("outerBox");
})
innerBox.addEventListener("click",function(event){
    console.log("innerBox");
    event.stopPropagation();
})


