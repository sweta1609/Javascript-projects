const button = document.querySelector('.open-modal-button');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton =document.querySelector('.close-btn');



button.addEventListener('click',function(){
    // const openModal = document.querySelector(".open-modal");
    // console.log(openModal)
    modalOverlay.classList.add("open-modal");
    

})

closeButton.addEventListener('click',function(){
    modalOverlay.classList.remove("open-modal");
})

