let colorIndex = 0;  // Start from the first color

const colors = [
    "none",  // Original image (no color change)
    "grayscale(100%) sepia(100%) hue-rotate(90deg)",  // Warm tone
    "grayscale(100%) sepia(100%) hue-rotate(180deg)", // Cool tone
    "grayscale(100%) sepia(100%) hue-rotate(270deg)", // Greenish tone
    "grayscale(100%) sepia(100%) hue-rotate(360deg)"  // Another tone
];

function changeColor(img) {
    // Apply the next color filter based on colorIndex
    img.style.filter = colors[colorIndex];
    
    // Move to the next color in the array
    colorIndex = (colorIndex + 1) % colors.length;  // Cycle back to the first color after the last
}
