// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const food = document.getElementById('food').value;
    const drink = document.getElementById('drink').value;
    const table = document.getElementById('table').value;
    const people = document.getElementById('people').value;
    const payment = document.getElementById('payment').value;
    const agreement = document.getElementById('agreement').checked;

    if (!agreement) {
        alert('Please confirm your order.');
        return;
    }

    // Display user order summary (you can modify to submit to a server)
    alert(`Order confirmed!\n\nFood: ${food}\nDrink: ${drink}\nTable: ${table}\nNumber of people: ${people}\nPayment: ${payment}`);
});
