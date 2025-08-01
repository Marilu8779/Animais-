const hamburger = document.getElementById('hamburger');
const menuContainer = document.getElementById('menuContainer');

hamburger.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});