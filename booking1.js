document.getElementById('table').addEventListener('change', function() {
    const table = this.value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;

    if (table && date && time) {
        checkTableAvailability(table, date, time);
    }
});

function checkTableAvailability(table, date, time) {
    if (table === 'Table 1' && date === '2024-11-25' && time === '19:00') {
        alert('Table 1 is unavailable at this time. Please choose another time or table.');
    }
}

// Special Requests for Large Groups
document.getElementById('people').addEventListener('input', function() {
    const people = this.value;
    const specialRequestsDiv = document.getElementById('specialRequestsDiv');
    if (people >= 6) { 
        specialRequestsDiv.style.display = 'block';
    } else {
        specialRequestsDiv.style.display = 'none';
    }

    // Live Price Calculation
    const pricePerPerson = 20;
    const total = people * pricePerPerson;
    document.getElementById('totalPrice').innerText = `Total Price: $${total}`;
});

// Show Confirmation Modal on Submit
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    $('#confirmationModal').modal('show');
    
    // Populate Modal with Form Data
    document.getElementById('modalTable').innerText = document.getElementById('table').value;
    document.getElementById('modalPeople').innerText = document.getElementById('people').value;
    document.getElementById('modalDate').innerText = document.getElementById('bookingDate').value;
    document.getElementById('modalTime').innerText = document.getElementById('bookingTime').value;
    document.getElementById('modalPayment').innerText = document.getElementById('payment').value;
});

// Confirm Booking and Submit
document.getElementById('confirmBooking').addEventListener('click', function() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        $('#confirmationModal').modal('hide');
        alert('Your booking has been confirmed!');
    }, 3000); 
}); 



// Array of gradient color sets to change upon click
const gradients = [
    'linear-gradient(45deg, #6a11cb, #2575fc)',  // Purple-Blue Gradient
    'linear-gradient(45deg, #ff7e5f, #feb47b)',  // Sunset Gradient
    'linear-gradient(45deg, #ff8a00, #e52e71)',  // Orange-Red Gradient
    'linear-gradient(45deg, #32cd32, #98fb98)',  // Green Gradient
    'linear-gradient(45deg, #ff0099, #493240)',  // Pink-Black Gradient
];

// Get the card element
const card = document.querySelector('.booking-section .card');

// Track the current gradient index
let currentGradientIndex = 0;

// Function to change the background gradient on click
function changeGradient() {
    currentGradientIndex = (currentGradientIndex + 1) % gradients.length; // Cycle through gradients
    card.style.background = gradients[currentGradientIndex]; // Apply new gradient
}

// Add event listener for card click
card.addEventListener('click', changeGradient);


// Mock database to store bookings
let tableBookings = JSON.parse(localStorage.getItem('tableBookings')) || [];

// Function to check table availability
function checkTableAvailability(selectedTable, selectedDate, selectedTime) {
    return !tableBookings.some(booking =>
        booking.table === selectedTable &&
        booking.date === selectedDate &&
        booking.time === selectedTime
    );
}

// Form submission for booking
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form inputs
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const table = document.getElementById('table').value;
    const people = document.getElementById('people').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const bookingTime = document.getElementById('bookingTime').value;
    const payment = document.getElementById('payment').value;

    // Validate table availability
    if (!checkTableAvailability(table, bookingDate, bookingTime)) {
        alert(`Table ${table} is already booked for ${bookingDate} at ${bookingTime}. Please select another table or time.`);
        return;
    }

    // Save the booking
    const booking = {
        name: customerName,
        email: email,
        phone: phone,
        table: table,
        people: people,
        date: bookingDate,
        time: bookingTime,
        payment: payment,
    };

    tableBookings.push(booking);
    localStorage.setItem('tableBookings', JSON.stringify(tableBookings));

    // Show confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('bookingForm').reset();

    setTimeout(() => {
        document.getElementById('confirmationMessage').style.display = 'none';
    }, 5000);
});

// Function to check out (remove a booking)
function checkoutBooking(phone, table, date, time) {
    const index = tableBookings.findIndex(
        booking =>
            booking.phone === phone &&
            booking.table === table &&
            booking.date === date &&
            booking.time === time
    );

    if (index !== -1) {
        tableBookings.splice(index, 1);
        localStorage.setItem('tableBookings', JSON.stringify(tableBookings));
        return true;
    }
    return false;
}

// Checkout process
document.getElementById('confirmationModal').addEventListener('submit', function (e) {
    e.preventDefault();

    const phone = prompt("Enter your phone number to check out:");
    const table = prompt("Enter your table name (e.g., Table 1):");
    const date = prompt("Enter your booking date (YYYY-MM-DD):");
    const time = prompt("Enter your booking time (HH:MM):");

    if (checkoutBooking(phone, table, date, time)) {
        alert("You have successfully checked out. Thank you!");
    } else {
        alert("Booking not found. Please ensure the details are correct.");
    }
});
