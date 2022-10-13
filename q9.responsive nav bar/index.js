const navList=()=>{
    const navBar=document.querySelector('#bars');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li');
    navBar.addEventListener('click',()=>{
        navBar.style.transform ='rotate(90deg)';
        navMenu.classList.toggle('nav-active');
        navLinks.forEach((links,index)=>{
            console.log(navMenu.classList.toggle('nav-active'));
          
            if(links.style.animation){
             
                
               links.style.animation="";
            }else{
               
                links.style.animation=`navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;

            }
        });

    
    });

}
navList();