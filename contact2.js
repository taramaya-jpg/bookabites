// Handling feedback form submission
document.querySelector('.feedback-form button').addEventListener('click', function (e) {
    e.preventDefault();
    const serviceRating = document.getElementById('service-rating').value;
    const foodQuality = document.getElementById('food-quality').value;
    const priceSatisfaction = document.getElementById('price-satisfaction').value;
    const feedback = document.getElementById('feedback').value;

    if (serviceRating && foodQuality && priceSatisfaction) {
        document.querySelector('.thank-you-message').style.display = 'block';
    } else {
        alert("Please fill out all required fields.");
    }
});