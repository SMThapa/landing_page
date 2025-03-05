window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");

    if (window.scrollY === 0 ) {
        navbar.classList.remove("scrolled");
    } else {
        navbar.classList.add("scrolled");
    }
});


//accordion
const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));


//hamburger-menu
const hamburger_button = document.querySelector('.hamburger-icon')
const hamburger_menu = document.querySelector('.hamburger-menu')
hamburger_button.addEventListener('click', () =>{
  hamburger_menu.classList.toggle('open')
  hamburger_button.classList.toggle('open')
})
