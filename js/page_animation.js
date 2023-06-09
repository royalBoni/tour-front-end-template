const square = document.querySelector('.main_page_img');
square.classList.remove('main_page_transition');

// Create the observer, same as before:
const observerr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('main_page_transition');
      return;
    }

    square.classList.remove('main_page_transition');
  });
});

observerr.observe(document.querySelector('.main_page_img'));



