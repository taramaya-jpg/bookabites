let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    // Update the index based on the direction
    currentIndex += direction;

    // Loop around the carousel if needed
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Go to last item
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Go to first item
    }

    // Slide the carousel by adjusting the transform property
    const offset = -currentIndex * 100; // Move the carousel
    carousel.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto Slide (if you want the carousel to move automatically after a set time)
setInterval(() => {
    moveCarousel(1); // Move to the next slide every 3 seconds
}, 3000);