// Function to open lightbox with the clicked image
function openLightbox(imageUrl) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageUrl; // Set the image source to the clicked image
    lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close lightbox when the background is clicked
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none'; // Hide the lightbox
}