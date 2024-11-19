// Select all the gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Loop through each item
galleryItems.forEach(item => {
    const imgDiv = item.querySelector('.item-img-circle');
    
    // Add click event listener to each image
    imgDiv.addEventListener('click', () => {
        // Get the new image URL from the data attribute
        const newImage = imgDiv.getAttribute('data-new-image');
        
        // Swap the background image with the new one
        imgDiv.style.backgroundImage = `url('${newImage}')`;
    });
});
