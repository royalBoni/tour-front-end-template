const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
card1.classList.remove('main_page_transition');
card2.classList.remove('main_page_transition');
card3.classList.remove('main_page_transition');

// Create the observer, same as before:
const observer_offer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      card1.classList.add('main_page_transition');
      card2.classList.add('main_page_transition');
      card3.classList.add('main_page_transition');
      return;
    }
  });
});

observer_offer.observe(document.querySelector('.offer_content'));
observer_offer.observe(document.querySelector('.card1'));
observer_offer.observe(document.querySelector('.card3'));