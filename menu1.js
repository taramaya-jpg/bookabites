// menu.js

function toggleSelection(button) {
    const card = button.closest('.card');
    const quantityDropdown = card.querySelector('.quantity-dropdown');
    const itemName = card.querySelector('h3').innerText;
    const itemPrice = parseFloat(card.querySelector('p').innerText.replace("Nu.", "").trim());

    if (button.innerText === "Select") {
        button.innerText = "Deselect";
        quantityDropdown.style.display = "inline-block";
    } else {
        button.innerText = "Select";
        quantityDropdown.style.display = "none";
    }

    quantityDropdown.addEventListener('change', () => {
        const quantity = parseInt(quantityDropdown.value);
        addToOrder(itemName, itemPrice, quantity);
    });
}

let selectedItems = [];

function addToOrder(name, price, quantity) {
    const existingItem = selectedItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity = quantity;
    } else {
        selectedItems.push({ name, price, quantity });
    }
    updateTotal();
}

function updateTotal() {
    const totalAmount = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    localStorage.setItem('totalAmount', totalAmount);
}

// Redirect to card page
document.querySelector('.add-to-payment-btn').addEventListener('click', () => {
    window.location.href = 'card.html';
});
