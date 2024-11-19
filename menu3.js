// Function to toggle the selection of an items
function toggleSelection(button) {
    button.classList.toggle("selected");
    const dropdown = button.nextElementSibling;

    if (button.classList.contains("selected")) {
        button.innerText = "Selected";
        dropdown.style.display = "block"; // Show quantity dropdown
    } else {
        button.innerText = "Select";
        dropdown.style.display = "none"; // Hide quantity dropdown
    }
}
