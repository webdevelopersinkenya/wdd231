
document.addEventListener('DOMContentLoaded', () => {
    // Select the nav links
    const navLinks = document.querySelectorAll('.nav-link');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // prevent default link behavior if needed

                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');

                console.log(`Navigation link clicked: ${link.textContent}`);
            });
        });
    } else {
        console.error("Error: Target navigation elements were not found in the DOM.");
    }
});
