// Get the image and the lightbox elements
const img = document.getElementById("imageClick");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("img-content");
const closeButton = document.getElementById("close");

// When the image is clicked, show the lightbox with the clicked image
img.addEventListener("click", function() {
    lightbox.style.display = "flex";  // Show the lightbox
    lightbox.style.opacity = "1";     // Make it visible
    lightboxContent.src = img.src;   // Set the lightbox image to the clicked image
});

// When the close button is clicked, hide the lightbox
closeButton.addEventListener("click", function() {
    lightbox.style.display = "none";  // Hide the lightbox
    lightbox.style.opacity = "0";     // Fade it out
});

// Optionally, close the lightbox if the user clicks outside the image
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
        lightbox.style.opacity = "0";
    }
});

function toggleSelection(button) {
    const dropdown = button.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}



