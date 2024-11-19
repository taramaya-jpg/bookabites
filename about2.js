// Array of texts to rotate
const textArray = [
    "Welcome to our restaurant where flavors meet tradition.",
    "Try our delicious Baley, made with the finest ingredients.",
    "Indulge in the classic taste of Pazzey, our signature dish.",
    "Savor the flavors of Chowmin, a dish to remember.",
    "Book your table now and experience the best of traditional cuisine!"
];

// Reference to the element where the text will change
const dynamicText = document.getElementById('dynamic-text');

// Counter to track the current text in the array
let counter = 0;

// Function to change the text every 5 seconds
function changeText() {
    dynamicText.innerHTML = textArray[counter];  // Set new text
    counter = (counter + 1) % textArray.length;  // Move to the next text in the array
}

// Call changeText function every 5 seconds (5000 ms)
setInterval(changeText, 5000);

// Initial call to display the first text
changeText();
