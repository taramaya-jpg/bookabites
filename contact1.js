document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple validation
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            alert('Please enter your message.');
            messageInput.focus();
            return;
        }

        alert('Thank you for your message!');
        form.reset(); // Reset form fields after submission
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    // Define neon color sets
    const neonColors = ['#00ffcc', '#ff33ff', '#ff6600', '#33ff33', '#0066ff'];
    let currentColorIndex = 0;

    contactForm.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % neonColors.length;
        const newColor = neonColors[currentColorIndex];
        
        // Update box shadow for neon effect
        contactForm.style.boxShadow = `0 0 15px ${newColor}, 0 0 30px ${newColor}`;
        contactForm.querySelectorAll('label, h3').forEach(el => {
            el.style.textShadow = `0 0 10px ${newColor}, 0 0 20px ${newColor}`;
        });
    });
});
