const menuIcon = document.querySelector('.burger-menu-btn');
const menu = document.querySelector('.burger-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
});