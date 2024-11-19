document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropbtn = document.querySelector(".dropbtn");

    dropbtn.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.querySelector(".dropdown-content").classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.querySelector(".dropdown-content").classList.remove("show");
        }
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the "active" class to show/hide the menu
}

