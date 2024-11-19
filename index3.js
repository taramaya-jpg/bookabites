// JavaScript to manage the carousel functionality
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Function to hide all testimonials and show the one at the current index
    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Show the first testimonial by default
    showTestimonial(index);

    // Next button functionality
    nextButton.addEventListener('click', function () {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    });

    // Previous button functionality
    prevButton.addEventListener('click', function () {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial(index);
    });
});


