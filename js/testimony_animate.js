const say_title =document.querySelector('.say_title');
say_title.classList.remove('main_page_transition');


// Create the observer, same as before:
const observer_testimony = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      say_title.classList.add('main_page_transition');
      
      return;
    }
    say_title.classList.remove('main_page_transition');
    
  });
});

observer_testimony.observe(document.querySelector('.say_title'));


const test_1 = document.querySelector('.test1');
test_1.classList.remove('main_page_transition');

// Create the observer, same as before:
const observer_test1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    test_1.classList.add('main_page_transition');
      
      return;
    }
    test_1.classList.remove('main_page_transition');
    
  });
});

observer_test1.observe(document.querySelector('.test1'));


const test_2 = document.querySelector('.test2');
test_2.classList.remove('main_page_transition');


// Create the observer, same as before:
const observer_test2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    test_2.classList.add('main_page_transition');
      
      return;
    }
    test_2.classList.remove('main_page_transition');
    
  });
});

observer_test2.observe(document.querySelector('.test2'));


const test_3 = document.querySelector('.test3');
test_3.classList.remove('main_page_transition');


// Create the observer, same as before:
const observer_test3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    test_3.classList.add('main_page_transition');
      
      return;
    }
    test_3.classList.remove('main_page_transition');
    
  });
});

observer_test3.observe(document.querySelector('.test3'));

