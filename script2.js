document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.querySelector('.feedback-form');
    const thankYouMessage = document.createElement('div');
    thankYouMessage.classList.add('thank-you-message');
    thankYouMessage.innerText = 'Thank you for your feedback! We appreciate your input.';

    // Append the thank-you message to the contact section (hidden initially)
    document.querySelector('.contact').appendChild(thankYouMessage);
    thankYouMessage.style.display = 'none';

    // Handle form submission
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Get values from the form
        const serviceRating = document.getElementById('service-rating').value;
        const foodQuality = document.getElementById('food-quality').value;
        const priceSatisfaction = document.getElementById('price-satisfaction').value;
        const feedback = document.getElementById('feedback').value;

        // Check if all fields are filled out
        if (serviceRating && foodQuality && priceSatisfaction && feedback) {
            // Show the thank-you message
            thankYouMessage.style.display = 'block';

            // Hide the message after 3 seconds
            setTimeout(function() {
                thankYouMessage.style.display = 'none';
            }, 3000); // Message disappears after 3 seconds

            // Reset the form
            feedbackForm.reset();
        } else {
            // Show alert if any fields are empty
            alert('Please fill out all fields before submitting.');
        }
    });
});
