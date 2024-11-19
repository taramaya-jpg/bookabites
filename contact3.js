document.querySelector('.feedback-form button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Get the values from the feedback form
    const serviceRating = document.getElementById('service-rating').value;
    const foodQuality = document.getElementById('food-quality').value;
    const priceSatisfaction = document.getElementById('price-satisfaction').value;
    const feedback = document.getElementById('feedback').value;

    // Validate form fields (make sure all fields are filled)
    if (!serviceRating || !foodQuality || !priceSatisfaction || !feedback) {
        alert('Please fill out all fields.');
        return;
    }

    // If everything is filled out, show the thank you message
    document.querySelector('.thank-you-message').style.display = 'block';
    
    // Optionally, reset the form fields (if you want to clear the form after submission)
    document.getElementById('service-rating').value = '';
    document.getElementById('food-quality').value = '';
    document.getElementById('price-satisfaction').value = '';
    document.getElementById('feedback').value = '';
});



// Array of neon colors to cycle through
const neonColors = [
    "#ff0080",  // Neon Pink
    "#ff00cc",  // Neon Violet
    "#00ff99",  // Neon Green
    "#ff00ff",  // Neon Magenta
    "#00ffff",  // Neon Cyan
    "#ff9900",  // Neon Orange
];

// Track the current color index
let colorIndex = 0;

// Get the elements that should have the neon effect
const button = document.querySelector('.feedback-form button');
const selects = document.querySelectorAll('.feedback-form select');
const textarea = document.querySelector('.feedback-form textarea');

// Function to apply neon glow with the current color
function applyNeonGlow(color) {
    button.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
    selects.forEach(select => {
        select.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
    });
    textarea.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
}

// Add event listener for clicks on the button and form elements
button.addEventListener('click', () => {
    // Change color index on every click and loop back after the last color
    colorIndex = (colorIndex + 1) % neonColors.length;
    const newColor = neonColors[colorIndex];
    applyNeonGlow(newColor);
});

selects.forEach(select => {
    select.addEventListener('click', () => {
        // Change color index on every click and loop back after the last color
        colorIndex = (colorIndex + 1) % neonColors.length;
        const newColor = neonColors[colorIndex];
        applyNeonGlow(newColor);
    });
});

textarea.addEventListener('click', () => {
    // Change color index on every click and loop back after the last color
    colorIndex = (colorIndex + 1) % neonColors.length;
    const newColor = neonColors[colorIndex];
    applyNeonGlow(newColor);
});
