let hamburger = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');
let links = document.querySelectorAll('.links');

// display links onClick on hamburger
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
    hamburger.classList.toggle('lines-rotate');
});

// hide navLink container onclick any single link
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      navLinks.classList.toggle('hide');
    });
}