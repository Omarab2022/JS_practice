const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const name = document.getElementById("name");
const job = document.getElementById("job");
const parag = document.getElementById("parag");
const img = document.getElementById("img");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const surpp = document.getElementById("surprice");

let current = 0 ;

window.addEventListener('DOMContentLoaded', function () {
    
    img.src = reviews[0].img;
    name.textContent = reviews[0].name;
    job.textContent = reviews[0].job;
    parag.textContent = reviews[0].text;
  });
  
  function show(personne) {
    const item = reviews[personne] ;
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    parag.textContent = item.text;
  }


  next.addEventListener('click' , function(){
    current++ ;
    if(current > reviews.length){
        current=0;
    }
    show(current);
  });

 prev.addEventListener('click'  , function(){
    current--;
    if (current < 0) {
        current = reviews.length - 1;
      }
    show(current);
  });

  surpp.addEventListener( 'click' , function(){
    current = Math.floor(Math.random() * reviews.length);
  show(current);
  });
