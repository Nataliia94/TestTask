const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const dropdown = document.querySelector('.dropdown');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    
    burger.classList.toggle('toggle');
});


dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});






