// create array

const menu=[{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

const breakfastarr = menu.slice(3,5)
const luncharr = menu.slice(0,3);
const dinnerarr = menu.slice(5,9);




const sectionCenter=document.querySelector(".section-center");
const buttonAll = document.getElementById("btn-all");
const buttonBreakfast = document.getElementById("btn-breakfast")
const btnLunch = document.getElementById('btn-lunch');
const btnDinner = document.getElementById('btn-dinner');


const data =function(item){
  return ` <article class="menu-item">
  <div class="menu-item-box">
      <img class="photo" src=${item.img} alt=${item.title} style="width:200px;height:100px">
      <header class="head">
          <h4 >${item.title}</h4>
          <h4 class="price">${item.price}</h4>
      </header>
      <hr>
      <p class="item_text">${item.desc}</p>
  </div>
</article>`
 }
let currentItem =0;
window.addEventListener("DOMContentLoaded",function(){
  // const displayMenu=menu[currentItem];
  // console.log(displayMenu)
  let displayMenu = menu.map(data)
  displayMenu = displayMenu.join(" ")
   sectionCenter.innerHTML = displayMenu;

})

buttonAll.addEventListener("click",function(){
   let displayMenu = menu.map(data)
   displayMenu = displayMenu.join(" ")
    sectionCenter.innerHTML = displayMenu;
})


buttonBreakfast.addEventListener('click',function(){
  let displayMenu = breakfastarr.map(data)
   displayMenu = displayMenu.join(" ")
    sectionCenter.innerHTML = displayMenu;

})


btnLunch.addEventListener('click',function(){
  
  let displayMenu =luncharr.map(data)
  displayMenu = displayMenu.join(" ")
  sectionCenter.innerHTML = displayMenu;

})

btnDinner.addEventListener('click',function(){
  let displayMenu =dinnerarr.map(data)
  displayMenu = displayMenu.join(" ")
  sectionCenter.innerHTML = displayMenu;

})

