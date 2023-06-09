const f_1 = document.querySelector('.f_1');
f_1.classList.remove('main_page_transition');


// Create the observer, same as before:
const observer_f_1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    f_1.classList.add('main_page_transition');
      
      return;
    }
    f_1.classList.remove('main_page_transition');
    
  });
});

observer_f_1.observe(document.querySelector('.f_1'));


const f_2 = document.querySelector('.f_2');
f_2.classList.remove('main_page_transition');


// Create the observer, same as before:
const observer_f_2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    f_2.classList.add('main_page_transition');
      
      return;
    }
    f_2.classList.remove('main_page_transition');
    
  });
});

observer_f_2.observe(document.querySelector('.f_2'));


const f_3 = document.querySelector('.f_3');
f_3.classList.remove('main_page_transition');


// Create the observer, same as before:
const observer_f_3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    f_3.classList.add('main_page_transition');
      
      return;
    }
    f_3.classList.remove('main_page_transition');
    
  });
});

observer_f_3.observe(document.querySelector('.f_3'));


const f_4 = document.querySelector('.f_4');
f_4.classList.remove('main_page_transition');


// Create the observer, same as before:
const observer_f_4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    f_4.classList.add('main_page_transition');
      
      return;
    }
    f_4.classList.remove('main_page_transition');
    
  });
});

observer_f_4.observe(document.querySelector('.f_4'));