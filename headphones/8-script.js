document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger icon button and the navigation links list
    const menuButton = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuButton && navLinks) {
        // 1. Toggle the menu on button click
        menuButton.addEventListener('click', function() {
            navLinks.classList.toggle('menu-open');
        });
    }

    // 2. Close the menu when any link is clicked (for seamless navigation)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Only attempt to close if the menu is actually open
            if (navLinks && navLinks.classList.contains('menu-open')) {
                navLinks.classList.remove('menu-open');
            }
        });
    });
});