// Get the FAQ button and modal
var faqBtn = document.getElementById("faqBtn");
var faqModal = document.getElementById("faqModal");
var faqCloseBtn = document.getElementById("faqCloseBtn");

// Open the FAQ modal when the FAQ button is clicked
faqBtn.onclick = function() {
    faqModal.style.display = "block";
}

// Close the FAQ modal when the close button (X) is clicked
faqCloseBtn.onclick = function() {
    faqModal.style.display = "none";
}

// Close the FAQ modal if the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target === faqModal) {
        faqModal.style.display = "none";
    }
}
