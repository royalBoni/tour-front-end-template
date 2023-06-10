const topic = document.querySelector('.topic');
topic.classList.remove('main_page_transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      topic.classList.add('main_page_transition');
      return;
    }
  });
});

observer.observe(document.querySelector('.topic'));




const place_1= document.querySelector('.place_1');
const place_2= document.querySelector('.place_2');
const place_3= document.querySelector('.place_3');
console.log(place_2)
place_1.classList.remove('main_page_transition');

// Create the observer, same as before:
const observer1 = new IntersectionObserver(entries => {
  setTimeout(() => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            place_1.classList.add('main_page_transition');
            
          return;
        }
        
      });
},1000);

setTimeout(() => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            place_2.classList.add('main_page_transition');
           
          return;
        }
       
      });
},1200);

setTimeout(() => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            place_3.classList.add('main_page_transition');
           
          return;
        }
       
      });
},1500);
});

observer1.observe(document.querySelector(".dest_content"));




const place_4= document.querySelector('.place_4');
const place_5= document.querySelector('.place_5');
const place_6= document.querySelector('.place_6');
console.log(place_2)
place_1.classList.remove('main_page_transition');

// Create the observer, same as before:
const observer2 = new IntersectionObserver(entries => {
  setTimeout(() => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            place_4.classList.add('main_page_transition');
            
          return;
        }
        
      });
},1000);

setTimeout(() => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            place_5.classList.add('main_page_transition');
           
          return;
        }
       
      });
},1200);

setTimeout(() => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            place_6.classList.add('main_page_transition');
           
          return;
        }
       
      });
},1500);
});

observer2.observe(document.querySelector(".place_4"));





