// script.js

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseButtons = document.querySelectorAll('.course-button');

    // Function to handle course filtering
    const filterCourses = (filter) => {
        // Update active state of filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const activeButton = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }

        // Show/Hide course buttons based on filter
        courseButtons.forEach(course => {
            const category = course.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    };

    // Attach click listener
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            filterCourses(filterValue);
        });
    });

    // Initialize with 'All' active to show all three initial courses
    filterCourses('all');
});