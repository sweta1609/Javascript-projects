// 1.created array to store reveiw and show
// 2.craeted variables fro image,job,authorname,info
// 3.craeted variable for prevbtn,currentbtn,surprise me
// 4.creted a varibale for increasing and decresing using it
// 5.ccreated a function for loading intial doument on screen
// 6.craeted a fucntion showperson to render person when clicked on prev or current button or surprise me
// 7.created a function for prev button
// 8.for current btn
// 9.craeted a function for surprise me factor


const reviews=[
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
];



const img = document.getElementById('image1');
const authorName = document.getElementById('author');
const jobAuthor = document.getElementById('job');
const paraCon = document.getElementById('info');



const prevBtn = document.querySelector('.previous-btn');
const currentBtn = document.querySelector('.current-btn');
const surprise = document.querySelector('.surprisebtn');


let currentItem = 0;


// load intial item
window.addEventListener("DOMContentLoaded",function(){
    const item = reviews[currentItem];
    img.src = item.img;
    authorName.textContent = item.name;
    jobAuthor.textContent=item.job;
    paraCon.textContent=item.text;

})


function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    authorName.textContent = item.name;
    jobAuthor.textContent=item.job;
    paraCon.textContent=item.text;
}


prevBtn.addEventListener('click',function(){
   
    currentItem--;
    if(currentItem <0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})


currentBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})


surprise.addEventListener('click',function(){
    let currentItem = Math.floor(Math.random()*reviews.length);
    
    showPerson(currentItem);
})
