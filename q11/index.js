// 2nd method
// USING SELECTORS INSIDE METHOD
const questions = document.querySelectorAll(".question");
questions.forEach(function(item){
   const btn =item.querySelector('.inner_box_2')
//    console.log(btn)
  btn.addEventListener('click',function(){
    questions.forEach(function(items){
        if(items !== questions){
            items.classList.remove("open_modal")

        }

    })
  item.classList.toggle("open_modal")
 

  })

})





// 1st METHOD
// Traversing dom
// const btns = document.querySelectorAll('.inner_box_2');
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question =e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("open_modal")
       
//     })

// })