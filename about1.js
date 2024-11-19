document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".sliding-box");
    let currentIndex = 0;

    function showNextBox() {
        // Remove 'active' class from the current box
        boxes[currentIndex].classList.remove("active");

        // Update index to the next box
        currentIndex = (currentIndex + 1) % boxes.length;

        // Add 'active' class to the next box
        boxes[currentIndex].classList.add("active");
    }

    // Initially show the first box
    boxes[currentIndex].classList.add("active");

    // Automatically switch boxes every 3 seconds
    setInterval(showNextBox, 3000);
});
