const dont_miss = document.querySelector('.dont_miss');
dont_miss.classList.remove('main_page_transition');

// Create the observer, same as before:
const observerr_dont_miss = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      dont_miss.classList.add('main_page_transition');
      return;
    }

    dont_miss.classList.remove('main_page_transition');
  });
});

observerr_dont_miss.observe(document.querySelector('.dont_miss'));
