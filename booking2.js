document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const modal = document.getElementById("confirmationModal");
    const closeButton = document.querySelector(".close-button");
    const spinner = document.getElementById("loadingSpinner");
    const availabilityMessage = document.getElementById("availability-message");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Show loading spinner
        spinner.style.display = "block";

        setTimeout(() => {
            spinner.style.display = "none";
            modal.style.display = "block"; // Show confirmation modal after simulated delay
            bookingForm.reset();
        }, 2000); // Simulate a 2-second delay for processing
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Availability check based on date
    document.getElementById("date").addEventListener("change", checkAvailability);
    function checkAvailability() {
        const date = document.getElementById("date").value;
        if (date === "2024-11-25") { // Example unavailable date
            availabilityMessage.innerText = "Sorry, no tables are available on this date.";
        } else {
            availabilityMessage.innerText = "Tables are available!";
        }
    }
});


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Array of gradient color combinations
        const gradients = [
            'linear-gradient(45deg, #ff6b6b, #f7b7a3)', // Red to Peach
            'linear-gradient(45deg, #ff8c00, #f6b93b)', // Orange to Yellow
            'linear-gradient(45deg, #00bcd4, #8e44ad)', // Blue to Purple
            'linear-gradient(45deg, #9b59b6, #ff6347)', // Purple to Tomato
            'linear-gradient(45deg, #1abc9c, #2ecc71)', // Green to Light Green
            'linear-gradient(45deg, #f39c12, #d35400)', // Yellow to Dark Orange
            'linear-gradient(45deg, #2980b9, #8e44ad)', // Blue to Violet
            'linear-gradient(45deg, #c0392b, #f39c12)', // Red to Yellow
            'linear-gradient(45deg, #e74c3c, #16a085)', // Red to Teal
            'linear-gradient(45deg, #34495e, #2ecc71)'  // Dark Gray to Green
        ];

        // Randomly pick a gradient from the array
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

        // Apply the new gradient to the card's background
        this.style.background = randomGradient;

        // Optionally, apply a change to the border and shadow on click
        this.style.borderColor = 'transparent';
        this.style.boxShadow = `0px 6px 15px rgba(0, 0, 0, 0.2)`;
    });
});

// Mock database for bookings
const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

// Helper function to check table availability
function isTableAvailable(date, time, table) {
    return !bookings.some(
        booking =>
            booking.date === date &&
            booking.time === time &&
            booking.table === table
    );
}

// Function to handle form submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const table = document.getElementById('table').value;
    const people = document.getElementById('people').value;
    const payment = document.getElementById('payment').value;
    const requests = document.getElementById('requests').value;
    const contact = document.getElementById('contact').value;

    // Check if table is available
    const availabilityMessage = document.getElementById('availability-message');
    if (!isTableAvailable(date, time, table)) {
        availabilityMessage.textContent = `Table ${table} is already booked for the selected date and time.`;
        availabilityMessage.style.color = 'red';
        return;
    }

    // Add booking to mock database
    bookings.push({ date, time, table, people, payment, requests, contact });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Show confirmation modal
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'block';

    // Clear form
    document.getElementById('bookingForm').reset();
    availabilityMessage.textContent = '';
});

// Close confirmation modal
document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('confirmationModal').style.display = 'none';
});

// Optional: Automatically close the modal after a few seconds
setTimeout(() => {
    document.getElementById('confirmationModal').style.display = 'none';
}, 3000);




// Function to display customer bookings
function displayBookings(contact) {
    const bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = ''; // Clear previous list

    // Filter bookings by contact number
    const customerBookings = bookings.filter(booking => booking.contact === contact);

    if (customerBookings.length === 0) {
        bookingList.innerHTML = `<p>No active bookings found for the provided contact number.</p>`;
        return;
    }

    // Display bookings
    customerBookings.forEach((booking, index) => {
        const bookingItem = document.createElement('div');
        bookingItem.classList.add('booking-item');
        bookingItem.innerHTML = `
            <p><strong>Table:</strong> ${booking.table}</p>
            <p><strong>Date:</strong> ${booking.date}</p>
            <p><strong>Time:</strong> ${booking.time}</p>
            <p><strong>Number of People:</strong> ${booking.people}</p>
            <button class="btn btn-danger checkout-button" data-index="${index}">Checkout</button>
        `;
        bookingList.appendChild(bookingItem);
    });

    // Add event listeners for checkout buttons
    document.querySelectorAll('.checkout-button').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            checkoutBooking(customerBookings[index]);
        });
    });
}

// Function to handle booking checkout
function checkoutBooking(booking) {
    const index = bookings.findIndex(b => b.date === booking.date && b.time === booking.time && b.table === booking.table);
    if (index !== -1) {
        bookings.splice(index, 1); // Remove booking
        localStorage.setItem('bookings', JSON.stringify(bookings)); // Update localStorage
        alert(`You have successfully checked out of Table ${booking.table}.`);
        displayBookings(booking.contact); // Refresh the booking list
    }
}

// Event listener for checking bookings
document.getElementById('checkBookingsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const contact = document.getElementById('checkContact').value;
    displayBookings(contact);
});
