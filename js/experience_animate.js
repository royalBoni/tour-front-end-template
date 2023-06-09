const exp_img = document.querySelector('.exp_img');
const exp_message = document.querySelector('.exp_message');
const breakdown = document.querySelectorAll('.breakdown');
exp_img.classList.remove('main_page_transition');
exp_message.classList.remove('main_page_transition');

for(let i =0; i<breakdown.length; i++){
    breakdown[i].classList.remove('main_page_transition');
}

// Create the observer, same as before:
const observerr_exp_img = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      exp_img.classList.add('main_page_transition');
      return;
    }

    exp_img.classList.remove('main_page_transition');
  });
});

observerr_exp_img.observe(document.querySelector('.experience'));



const observerr_exp_message = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        exp_message.classList.add('main_page_transition');
        
        for(let i =0; i<breakdown.length; i++){
            breakdown[i].classList.add('main_page_transition');
        }
        return;
      }
      exp_message.classList.remove('main_page_transition');
      for(let i =0; i<breakdown.length; i++){
        breakdown[i].classList.remove('main_page_transition');
    }
    });
  });
  
  observerr_exp_message.observe(document.querySelector('.exp_message'));



